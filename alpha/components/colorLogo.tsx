import { FC } from "react"

interface Props {
  logoClass: string
  containerClass: string
}

export const ColorLogo: FC<Props> = ({ logoClass, containerClass}) => {
  return (
    <div className={containerClass}>
      <img
        alt="Mid Wales Arts logo"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 66 65' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.676 3.961l.006.004c5.109 3.277 11.507 11.748 11.583 20.139.107 11.873-7.319 25.127-15.591 28.848 2.115-5.038 5.712-9.979 6.582-15.55a51.549 51.549 0 001.648-12.972c0-7.27-1.506-14.191-4.228-20.469z' fill='url(%23_Radial1)'/%3E%3Cpath d='M29.277.002C15.321-.216-.005 12.916-.005 30.702c0 19.044 15.27 34.171 33.251 34.295 19.13.133 30.799-14.619 31.907-34.295.598-10.614-5.464-22.657-15.77-26.838C54.626 6.945 59.622 16.127 59.7 24.713c.107 11.873-5.521 21.327-13.543 27.82 4.083-6.024 6.582-12.562 6.582-20.539 0-16.407-9.507-31.775-23.462-31.992z' fill='%23333333'/%3E%3Cdefs%3E%3CradialGradient id='_Radial1' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(-20.65 16.5633 -16.5624 -20.6512 39.225 14.58)'%3E%3Cstop offset='0' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.27' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.5' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='.72' stop-color='%23d9f5fb' stop-opacity='.31'/%3E%3Cstop offset='1' stop-color='%2384dff2'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"
        loading="lazy"
        className={logoClass}
      />
    </div>
  )
}
