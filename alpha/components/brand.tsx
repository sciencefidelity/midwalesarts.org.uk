import { FC } from "react"

export const BrandCy: FC = () => {
  return (
    <div>
      <h1 className="brand" style={{
        fontWeight: "bold",
        paddingBottom: "0.1em"
      }}>
        <span style={{ letterSpacing: "0.02em" }}>C</span>
        <span style={{ letterSpacing: "0.3rem" }}>e</span>
        <span>l</span>
        <span>f</span>
      </h1>
      <h1 className="brand">
        <span>C</span>
        <span>a</span>
        <span style={{ letterSpacing: "-0.02em" }}>n</span>
        <span style={{ letterSpacing: "-0.02em" }}>o</span>
        <span>l</span>
      </h1>
      <h1 className="brand">
        <span style={{ letterSpacing: "0.02em" }}>C</span>
        <span style={{ letterSpacing: "0.01em" }}>y</span>
        <span style={{ letterSpacing: "0.01em" }}>m</span>
        <span>r</span>
        <span>u</span>
      </h1>
    </div>
  )
}

export const BrandEn: FC = () => {
  return (
    <div>
      <h1 className="brand" style={{ paddingLeft: "0.05em" }}>
        <span style={{ letterSpacing: "0.02em" }}>M</span>
        <span style={{ letterSpacing: "0.03em" }}>i</span>
        <span>d</span>
      </h1>
      <h1 className="brand">
        <span style={{ letterSpacing: "-0.12em" }}>W</span>
        <span>a</span>
        <span style={{ letterSpacing: "0.01em" }}>l</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <h1
        className="brand"
        style={{
          fontWeight: "bold",
          paddingLeft: "0.03em",
          paddingTop: "0.1em"
        }}
      >
        <span>A</span>
        <span style={{ letterSpacing: "0.026em" }}>r</span>
        <span>t</span>
        <span>s</span>
      </h1>
    </div>
  )
}
