import s from "styles/layout.module.scss"

interface Props {
  alt: string
  containerClass: string
  logoClass: string
}

export function ColorLogo({ alt, containerClass, logoClass }: Props) {
  return (
    <div className={`${s[containerClass]}`}>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        className={`${s[logoClass]}`}
      >
        <title>{alt}</title>
        <path
          d="m390.2 31.21.04.03c40.13 25.82 92.65 99.23 93.25 165.32.85 93.52-58.38 165.18-121.38 216.33 24.34-36.02 41.52-74.38 48.35-118.26a407.4 407.4 0 0 0 12.94-102.19 405.36 405.36 0 0 0-33.2-161.22Z"
          style={{ fill: "url(#a)" }}
        />
        <path
          d="M229.94.02C120.35-1.69 0 101.75 0 241.85c0 150 119.92 269.16 261.12 270.14 150.22 1.04 241.86-115.15 250.56-270.14 4.7-83.61-42.91-178.47-123.84-211.4 41.17 24.26 80.4 96.6 81.01 164.22.85 93.52-43.35 168-106.34 219.14 32.06-47.45 51.69-98.95 51.69-161.78 0-129.24-74.66-250.3-184.25-252Z"
          style={{ fill: "#333333" }}
        />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-162.201 130.468 -130.094 -162.668 308.1 114.86)"
          >
            <stop offset="0" style={{ stopColor: "#00abed", stopOpacity: 0 }} />
            <stop
              offset=".27"
              style={{ stopColor: "#a8d9ec", stopOpacity: 0 }}
            />
            <stop
              offset=".5"
              style={{ stopColor: "#ebebeb", stopOpacity: 0 }}
            />
            <stop
              offset=".72"
              style={{ stopColor: "#c8e9e3", stopOpacity: 0.1 }}
            />
            <stop offset="1" style={{ stopColor: "#78e6d0", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
