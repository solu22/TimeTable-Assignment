import { setCurrentCoordinates } from "../redux/action";
import store from "../redux/store";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = (pos) => {
  const crd = pos.coords;

  store.dispatch(
    setCurrentCoordinates({ lat: crd.latitude, long: crd.longitude })
  );
};

const error = (err) => {
  console.log(`ERROR(${err.code}): ${err.message}`);
};

const getLocation = () =>
  navigator.geolocation.getCurrentPosition(success(), error(), options);

export default getLocation;
