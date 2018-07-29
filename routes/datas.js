const mongoose = require('mongoose');

// Map Schemas
var statsIntraSchema = mongoose.Schema({
  request_datetime:{
    type: Date,
    required: true
  },
  content_length:{
    type: Number,
    required: true
  },
  response_time:{
    type: Number,
    required: true
  }
});

var StatsIntra = module.exports = mongoose.model('StatsIntra', statsIntraSchema);

// Get All Map
module.exports.getStatsIntra = (limit) => {
  return new Promise((resolve, reject) => {
    StatsIntra.find((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    }).limit(limit);
  })
};

// Add Map
module.exports.addStatsIntra = (stats) => {
  return new Promise((resolve, reject) => {
    StatsIntra.create(statsIntra, (err, documents) => {
      if (err) {
        reject(err);
      }
    })
    resolve(statsIntra.length);
  })
}

// Empty Collection
module.exports.emptyCollection = () => {
  return new Promise((resolve, reject) => {
    StatsIntra.remove((err, documents) => {
      if (err) {
        reject(err);
      }
      resolve("Collection emptied");
    });
  })   
}