import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';

function useGeolocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function getUserGeoLocation() {
    Geolocation.getCurrentPosition(function (info) {
      console.log(info, '###');

      setLatitude(info?.coords?.latitude);
      setLongitude(info?.coords?.longitude);
    });
  }

  useEffect(function () {
    getUserGeoLocation();
  }, []);

  return {
    getUserGeoLocation,
    latitude,
    longitude,
  };
}

export default useGeolocation;
