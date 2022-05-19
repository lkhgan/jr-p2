const openweathermapServiceAPI = require("../services/openweathermapServiceAPI");

//GET
exports.index = async (req, res) => {
  const result = await openweathermapServiceAPI.getWeather();
  res.send(result.data);
};

//POST
exports.store = (req, res) => {};

//PUT
exports.update = (req, res) => {};

//GET ONE
exports.show = (req, res) => {};

//DELETE
exports.delete = (req, res) => {};
