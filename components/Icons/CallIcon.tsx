import * as React from "react";
import { SVGProps } from "react";

export default function CallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <rect width={42} height={42} x={11} y={11} fill="#fff" rx={4} />
        <rect width={42} height={42} x={11} y={11} stroke="#F2B304" rx={4} />
      </g>
      <g clipPath="url(#b)">
        <path
          fill="#FB0"
          d="M39.95 41c-2.083 0-4.142-.454-6.175-1.362-2.033-.908-3.883-2.196-5.55-3.863-1.667-1.667-2.954-3.517-3.862-5.55-.908-2.033-1.362-4.092-1.363-6.175 0-.3.1-.55.3-.75.2-.2.45-.3.75-.3h4.05c.233 0 .442.08.625.238a.915.915 0 0 1 .325.562l.65 3.5a1.77 1.77 0 0 1-.025.675c-.05.183-.142.342-.275.475l-2.425 2.45c.333.617.729 1.212 1.187 1.787.458.575.962 1.129 1.513 1.663.517.517 1.058.996 1.625 1.438A15.73 15.73 0 0 0 33.1 37l2.35-2.35a1.4 1.4 0 0 1 .588-.337c.242-.075.48-.096.712-.063l3.45.7c.233.067.425.188.575.363A.88.88 0 0 1 41 35.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3Z"
        />
      </g>
      <defs>
        <clipPath id="b">
          <path fill="#fff" d="M20 20h24v24H20z" />
        </clipPath>
        <filter
          id="a"
          width={71}
          height={71}
          x={0.5}
          y={0.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={7} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
