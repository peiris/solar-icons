import * as React from "react";
import type { SVGProps } from "react";
const SvgBones = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.48 10.61A2.519 2.519 0 0 0 12 8.091a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757-.484-.275-.96-.717-.96-1.273V2.01H9.48v2.05c0 .556-.476.998-.96 1.273-.915.518-1.56 1.706-1.56 2.757a2.519 2.519 0 0 0 2.52 2.52ZM14.557 21.988v-2.003c0-.557.476-.999.96-1.273.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0 2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758.485.274.961.716.961 1.273v2.005l5.038-.002Z"
      />
    </svg>
  );
};
export default SvgBones;
