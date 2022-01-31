import React from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "components/locationPin"

const GoogleMap = () => {
  const location = {
    address: "Mid Wales Arts Centre, Maesmawr, Caesws, Newtown SY17 5SB",
    lat: 52.512,
    lng: -3.425
  }
  const zoomLevel = 15
  return (
    <div className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          _lat={location.lat}
          _lng={location.lng}
          _text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
