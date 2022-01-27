const LocationPin = () => {
  return (
    <div className="pin">
      <img
        alt="Location pin"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z' fill='%23595959'/%3E%3C/svg%3E"
        loading="lazy"
        className="locationPin"
      />
    </div>
  )
}

export default LocationPin
