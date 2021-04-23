import * as React from "react"

const Brand = () => (
  <>
    <div>
      <h1 className="brand" style={{paddingLeft: `0.05em`}}>
        <span style={{letterSpacing: `0.02em` }}>M</span>
        <span style={{letterSpacing: `0.03em` }}>i</span>
        <span>d</span>
      </h1>
      <h1 className="brand">
        <span style={{letterSpacing: `-0.12em`}}>W</span>
        <span>a</span>
        <span style={{letterSpacing: `0.01em` }}>l</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <h1 className="brand bold" style={{paddingLeft: `0.03em`, paddingTop: `0.1em`}}>
        <span>A</span>
        <span style={{letterSpacing: `0.026em`}}>r</span>
        <span>t</span>
        <span>s</span>
      </h1>
    </div>
  </>
)

export default Brand
