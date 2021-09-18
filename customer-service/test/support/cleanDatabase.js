const container = require("../../src/container");
const config = container.resolve("config");

module.exports = async function () {
  // console.log("ghfhfhfh ----  : ", mongoose);
  // console.log("HEYEYYEY");
  // // function clearCollections() {
  // //   for (var collection in mongoose.connection.collections) {
  // //     mongoose.connection.collections[collection].remove(function () {});
  // //   }
  // //   return done();
  // // }
  // console.log("CONNECT", mongoose.connection);
  // if (mongoose.connection.readyState === 0) {
  //   mongoose.connect(config.test.db, function (err) {
  //     if (err) throw err;
  //     return clearCollections();
  //   });
  // } else {
  //   return clearCollections();
  // }
};
