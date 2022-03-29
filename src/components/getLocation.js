import { setCurrentCoordinates } from "../redux/action";

import store from "../redux/store";

import { dispatch} from 'react-redux'

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  
  console.log("check this shit")
  /**to do set state in redux */
  
  store.dispatch(setCurrentCoordinates({ lat: crd.latitude, long: crd.longitude }));

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const getLocation=()=>navigator.geolocation.getCurrentPosition(success, error, options);

export default getLocation;