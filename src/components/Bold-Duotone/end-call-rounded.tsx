import * as React from "react";
import type { SVGProps } from "react";
const SvgEndCallRounded = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="m6.947 16.517-1.34.38C3.782 17.415 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347C4.128 9.376 6 7.908 9 7.292v6.326c0 1.365-.844 2.556-2.053 2.9ZM15 13.618c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.872 9.376 18 7.908 15 7.292v6.326Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654V7.292A14.886 14.886 0 0 0 12 7c-1.106 0-2.103.108-3 .292v6.326Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgEndCallRounded;
