const request = require('request');

const fetchMyIP = function (callback) {

  const url = 'https://api.ipify.org?format=json';
  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const bodyParsed = JSON.parse(body);
    const IP = bodyParsed.ip;
    callback(null, IP);

  }
  );
};

module.exports = { fetchMyIP };