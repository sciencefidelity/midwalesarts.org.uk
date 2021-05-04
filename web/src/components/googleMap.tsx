import React from 'react'
import GoogleMapReact from 'google-map-react'

import '../scss/map.scss'

import LocationPin from './locationPin'

const location = {
  address: 'Mid Wales Arts Centre, Maesmawr, Caesws, Newtown SY17 5SB',
  lat: 52.51249022072016,
  lng: -3.4253009174101497,
}
const zoomLevel = 15
 
const GoogleMap = () => {
  return (
    <div className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAaOhlsDSFo_z7TDY1YinxPbndeoPVX7bA"
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}
 
export default GoogleMap
