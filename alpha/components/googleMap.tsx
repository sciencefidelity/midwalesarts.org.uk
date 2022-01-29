import React from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "components/locationPin"

const location = {
  address: "Mid Wales Arts Centre, Maesmawr, Caesws, Newtown SY17 5SB",
  lat: 52.512,
  lng: -3.425
}
const zoomLevel = 15

const GoogleMap = () => {
  return (
    <div className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
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
