import * as React from "react";
import { SVGProps } from "react";
const MoboArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="#FB0"
      d="M24.354 4.354a.5.5 0 0 0 0-.708L21.172.464a.5.5 0 1 0-.707.708L23.293 4l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM0 4.5h24v-1H0v1Z"
    />
  </svg>
);
export default MoboArrow;
