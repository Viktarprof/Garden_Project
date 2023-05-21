import React, { useMemo } from 'react'
import s from './MapWindow.module.css'
import { GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";

function MapWindow() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCsFatFOH5N9QpQ1oBag9TGUHH3kg_VnZY",
  });
  const center = useMemo(() => ({ lat: 52.5079329, lng: 13.3750447  }), []);
  
  return (
    <div className={s.map}>
       {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={s.map_container}
          center={center}
          zoom={17}
          >
       <Marker position={{ lat: 52.5079329, lng: 13.3750447 }} /> 
          </GoogleMap>
      )}
          
    </div>
  )
}

export default MapWindow