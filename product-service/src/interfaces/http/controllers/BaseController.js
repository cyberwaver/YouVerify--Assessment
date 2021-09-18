const httpStatus = require("http-status");
const {
  NotFoundException,
  ApplicationException,
  ValidationException,
} = require("../../../exceptions");

const defaultContext = JSON.stringify({
  asyncTask: Promise.resolve(),
  onSuccess: {},
  onFailure: {},
});

class BaseController {
  constructor() {
    this._resetExecutionContext();
    this.options = {};
  }

  _resetExecutionContext() {
    this.__executionContext = JSON.parse(defaultContext);
  }

  extractPaginationOpts(query) {
    return { page: Number(query.page), take: Number(query.pageSize) };
  }

  task(asyncTask, ...args) {
    this._resetExecutionContext();
    this.__executionContext.asyncTask = asyncTask;
    this.__executionContext.asyncTaskArgs = args;
    return this;
  }

  onSuccess(statusOrOptions, message, dtoSerializer) {
    let onSuccessData = { status: statusOrOptions, message, dtoSerializer };
    if (typeof statusOrOptions == "object") onSuccessData = statusOrOptions;
    this.__executionContext.onSuccess = onSuccessData;
    return this;
  }

  onFailure(status) {
    this.__executionContext.onFailure = { status };
    return this;
  }

  async execute(res) {
    let executingTask;
    const { asyncTask, asyncTaskArgs, onFailure, onSuccess } = this.__executionContext;
    if (typeof asyncTask === "object") executingTask = asyncTask.execute(...asyncTaskArgs);
    else if (typeof asyncTask === "function") executingTask = asyncTask(...asyncTaskArgs);
    else executingTask = asyncTask;

    executingTask
      .then((result) => {
        const { status, message, dtoSerializer } = onSuccess;
        res.status(status || httpStatus.OK).json({
          status: "success",
          message,
          data: this._runDTOSerializer(result, dtoSerializer),
        });
      })
      .catch((err) => {
        if (err instanceof NotFoundException)
          res.status(onFailure.status || httpStatus.NOT_FOUND).json({
            status: "failed",
            type: "NotFoundError",
            code: err.key,
            message: err.message,
          });
        else if (err instanceof ApplicationException) {
          res.status(onFailure.status || httpStatus.BAD_REQUEST).json({
            status: "failed",
            type: "ApplicationError",
            code: err.key,
            message: err.message,
          });
        } else if (err instanceof ValidationException) {
          res.status(onFailure.status || httpStatus.BAD_REQUEST).json({
            status: "failed",
            type: "ValidationError",
            message: err.message,
          });
        } else {
          res.status(onFailure.status || 500).send("INTERNAL SERVER ERROR");
          console.error(err);
        }
      });
  }
  _runDTOSerializer(data, dtoSerializer = (d) => d) {
    return Array.isArray(data) ? data.map(dtoSerializer) : dtoSerializer(data);
  }
}

module.exports = BaseController;
