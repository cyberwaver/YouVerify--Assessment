# YouVerify Assessment

## Local Setup

Clone this repo

```bash
git clone https://github.com/cyberwaver/youverify--assessment.git
```

_Time factor: I would have completed the automated test setup_

## Tools Used

- Nodejs - scripting language (javascript) used for the backend.
- ExpressJS - server framework used for handling requests and responses
- MongoDB - NoSQL database
- Mongoose - MongoDB ORM
- Awilix - A Dependency Injection(DI) Container library for node, makes IoC (Inversion of Control) easy.
- EventEmitter2 - For establishing asynchronous communication via events.
- JOI - For input validation
- Morgan - For logging
  ... etc.

## Note (Architecture for the services)

![Clean Architecture Image](/assets/clean-architecture-1.jpeg)

![Clean Architecture Image](/assets/clean-architecture-2.jpeg)

The architecture design inspiration for this application is based on clean architecture by Robert C. Martin (Uncle Bob)

The design enforces loose-coupling among components.

Based on the onion architecture which can be traced back to the layering approach of network computers OSI model.

#### OVERVIEW

- External requests (http, grpc etc) comes in to the app via the interfaces
- An appropriate controller handles the request by forwarding the request to the appropriate usecase handler
- The Usecase handler validates the data, makes some checks based on some set of rules, fetches data via repository handlers
- The controller gets back the response, forwards it to the client.

...There is a clear mental model on how the application works, implementations aren't tied to controllers.
