import React from 'react'
import GoogleMapReact from 'google-map-react'

const location = {
  address: 'Mid Wales Arts Centre, Maesmawr, Caesws, Newtown SY17 5SB',
  lat: 52.51129022072016,
  lng: -3.4243009174101497,
}
const zoomLevel = 15
 
const GoogleMap = () => {
  return (
    <div className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_API_KEY
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
      </GoogleMapReact>
    </div>
  )
}
 
export default GoogleMap