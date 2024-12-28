import * as React from "react";
import { SVGProps } from "react";
const ArrowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#263238"
      fillRule="evenodd"
      d="M13.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L11.586 6 7.293 1.707A1 1 0 0 1 8.707.293l5 5Z"
      clipRule="evenodd"
      opacity={0.6}
    />
    <path
      fill="#263238"
      fillRule="evenodd"
      d="M6.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L4.586 6 .293 1.707A1 1 0 0 1 1.707.293l5 5Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="#263238"
      fillRule="evenodd"
      d="M20.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 6l-4.293-4.293A1 1 0 0 1 15.707.293l5 5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowsIcon;
