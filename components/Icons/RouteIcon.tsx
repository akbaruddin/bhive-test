import * as React from "react";
import { SVGProps } from "react";
const RouteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#1C1B1F"
      d="M8 15a7.18 7.18 0 0 1-2.858-.575 7.365 7.365 0 0 1-2.334-1.567 7.366 7.366 0 0 1-1.566-2.333 7.179 7.179 0 0 1-.575-2.858A7.16 7.16 0 0 1 1.242 4.8a7.392 7.392 0 0 1 1.566-2.325A7.367 7.367 0 0 1 5.142.908 7.18 7.18 0 0 1 8 .333a7.17 7.17 0 0 1 2.867.575 7.392 7.392 0 0 1 2.325 1.567A7.394 7.394 0 0 1 14.758 4.8c.384.889.575 1.844.575 2.867a7.18 7.18 0 0 1-.575 2.858 7.367 7.367 0 0 1-1.566 2.333 7.39 7.39 0 0 1-2.325 1.567A7.162 7.162 0 0 1 8 15Zm-.417-2.15a.527.527 0 0 0 .384.167.527.527 0 0 0 .383-.167l4.8-4.8a.546.546 0 0 0 .167-.4.546.546 0 0 0-.167-.4l-4.8-4.8a.527.527 0 0 0-.767 0l-4.8 4.8a.546.546 0 0 0-.166.4c0 .156.055.289.166.4l4.8 4.8Zm-2.266-3.2V6.983c0-.2.06-.36.183-.483a.653.653 0 0 1 .483-.183H8.75l-.7-.734.933-.933 2.334 2.333-2.334 2.334-.933-.934.7-.733h-2.1v2H5.317ZM8 13.667c1.678 0 3.097-.58 4.258-1.742C13.42 10.764 14 9.345 14 7.667s-.58-3.098-1.742-4.259C11.098 2.248 9.678 1.667 8 1.667s-3.097.58-4.258 1.741S2 5.988 2 7.667c0 1.677.58 3.097 1.742 4.258 1.16 1.161 2.58 1.742 4.258 1.742Z"
    />
  </svg>
);
export default RouteIcon;