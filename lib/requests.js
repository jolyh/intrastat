const request = require('request')
const queriesRequest = require('../queries/queries_request_datas')

var urlIntra = 'https://support.neolane.net/webApp/extranetLogin';

class Requester {

  static statRequest () {
    console.log('normal request')
    request(urlIntra, (err, res, body) => {
      if (err) { 
        return console.log(err) 
      }
      console.log(res);
      console.log(body.length);

      /*const queries = new queriesRequest(dbConnection)
      queries.insertRequestStats({
        content_length: body.length,
        response_time: 0 
      })*/
    })
  }

  static requestCoordinator () {
    setInterval(this.statRequest, 10000);
  }
}

module.exports = Requester;