import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifer = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m17.1 18.122 3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9.206 9.206 0 0 1-1.022 1.022Z"
      />
    </svg>
  );
};
export default SvgMagnifer;
