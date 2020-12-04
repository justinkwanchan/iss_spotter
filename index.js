// index.js

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  // success, print out the deets!
  passTimes.forEach(element => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    const duration = element.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
});

// Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!

// [ { duration: 640, risetime: 1607041049 },
//   { duration: 419, risetime: 1607046921 },
//   { duration: 593, risetime: 1607101340 },
//   { duration: 654, risetime: 1607107099 },
//   { duration: 632, risetime: 1607112940 } ]


// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.202.23.114', (error, data) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! =>', data);
// });

// fetchISSFlyOverTimes({ latitude: 45.5607, longitude: -73.6531 }, (error, data) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! =>', data);
// });