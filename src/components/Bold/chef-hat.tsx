import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHat = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 5a5 5 0 0 0-2 9.584v2.666h14v-2.666a5.001 5.001 0 0 0-2.737-9.53 4.502 4.502 0 0 0-8.526 0A5.04 5.04 0 0 0 7 5ZM18.998 18.75H5.002c.01 1.397.081 2.162.584 2.664C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586.503-.502.574-1.267.584-2.664Z"
      />
    </svg>
  );
};
export default SvgChefHat;
