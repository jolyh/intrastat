class QueriesRequestDatas {

  QueriesRequestStats() {

  }

  static getAllRequestStats = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query('SELECT * FROM request_datas ORDER BY id DESC', (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      })
    })
  } 

  
  static getAllRequestStats = (data) => {
    return new Promise((resolve, reject) => {
      dbConnection.query('INSERT INTO request_datas set ?', data, (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      })
    })
  } 

}


module.exports = RequestsStats;