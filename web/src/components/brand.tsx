import * as React from "react"

const Brand = () => (
  <>
    <div 
      style={{
        position: `absolute`,
        bottom: -28,
        right: `91.5rem`,
        transform: `scale(108%)`,
        opacity: `0`,
      }}>
      <img src="https://stage.midwalesarts.org.uk/mwa-brand.png" />
    </div>
    <h1 className="brand" style={{paddingLeft: `0.05em`}}>
      <span style={{letterSpacing: `0.02em`}}>M</span>
      <span style={{letterSpacing: `0.3rem`}}>i</span>
      <span style={{letterSpacing: `0.0rem`}}>d</span>
    </h1>
    <h1 className="brand">
      <span style={{letterSpacing: `-1.2rem`}}>W</span>
      <span style={{letterSpacing: `0.0rem`}}>a</span>
      <span style={{letterSpacing: `0.1rem`}}>l</span>
      <span style={{letterSpacing: `0.0rem`}}>e</span>
      <span style={{letterSpacing: `0.0rem`}}>s</span>
    </h1>
    <h1 className="brand bold" style={{paddingLeft: `0.03em`}}>
      <span style={{letterSpacing: `0.0rem`}}>A</span>
      <span style={{letterSpacing: `0.26rem`}}>r</span>
      <span style={{letterSpacing: `0.0rem`}}>t</span>
      <span style={{letterSpacing: `0.0rem`}}>s</span>
    </h1>
  </>
)

export default Brand
