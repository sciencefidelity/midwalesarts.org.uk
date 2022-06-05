import { FC } from "react"
import s from "styles/layout.module.scss"

interface Props {
  alt: string
  containerClass: string
  logoClass: string
}

// TODO: change this to svg
export const ColorLogo: FC<Props> = ({ alt, containerClass, logoClass }) => {
  return (
    <div className={`${s[containerClass]}`}>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2
        }}
        className={`${s[logoClass]}`}
      >
        <title>{alt}</title>
        <path
          d="m390.2 31.21.04.03c40.13 25.82 92.65 99.23 93.25 165.32.85 93.52-58.38 165.18-121.38 216.33 24.34-36.02 41.52-74.38 48.35-118.26a407.4 407.4 0 0 0 12.94-102.19 405.36 405.36 0 0 0-33.2-161.22Z"
          style={{ fill: "url(#a)" }}
        />
        <path d="M229.94.02C120.35-1.69 0 101.75 0 241.85c0 150 119.92 269.16 261.12 270.14 150.22 1.04 241.86-115.15 250.56-270.14 4.7-83.61-42.91-178.47-123.84-211.4 41.17 24.26 80.4 96.6 81.01 164.22.85 93.52-43.35 168-106.34 219.14 32.06-47.45 51.69-98.95 51.69-161.78 0-129.24-74.66-250.3-184.25-252Z" style={{fill:"#333333"}} />
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
      {/* <img
        alt={alt}
        src="data:image/svg+xml,%3Csvg viewBox='0 0 66 65' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.676 3.961l.006.004c5.109 3.277 11.507 11.748 11.583 20.139.107 11.873-7.319 25.127-15.591 28.848 2.115-5.038 5.712-9.979 6.582-15.55a51.549 51.549 0 001.648-12.972c0-7.27-1.506-14.191-4.228-20.469z' fill='url(%23_Radial1)'/%3E%3Cpath d='M29.277.002C15.321-.216-.005 12.916-.005 30.702c0 19.044 15.27 34.171 33.251 34.295 19.13.133 30.799-14.619 31.907-34.295.598-10.614-5.464-22.657-15.77-26.838C54.626 6.945 59.622 16.127 59.7 24.713c.107 11.873-5.521 21.327-13.543 27.82 4.083-6.024 6.582-12.562 6.582-20.539 0-16.407-9.507-31.775-23.462-31.992z' fill='%23333333'/%3E%3Cdefs%3E%3CradialGradient id='_Radial1' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(-20.65 16.5633 -16.5624 -20.6512 39.225 14.58)'%3E%3Cstop offset='0' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.27' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.5' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.72' stop-color='%23d9f5fb' stop-opacity='.31'/%3E%3Cstop offset='1' stop-color='%2384dff2'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"
        loading="lazy"
        className={`${s[logoClass]}`}
        width={152}
        height={150}
      /> */}
    </div>
  )
}
