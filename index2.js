const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(passtimes => console.log(passtimes))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });