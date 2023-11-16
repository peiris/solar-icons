import * as React from "react";
import type { SVGProps } from "react";
const SvgScale = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.001 2.75A.75.75 0 0 0 11 1.25c-2.016.004-3.622.029-4.898.235-1.3.21-2.338.62-3.167 1.449-.895.894-1.3 2.034-1.494 3.48-.19 1.41-.19 3.22-.19 5.528v.115c0 2.308 0 4.117.19 5.529.194 1.445.6 2.585 1.494 3.48.895.894 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.195 2.584-.6 3.479-1.495.828-.828 1.238-1.867 1.448-3.166.207-1.277.232-2.883.235-4.898a.75.75 0 1 0-1.5-.003c-.003 2.04-.031 3.523-.216 4.661-.18 1.116-.5 1.817-1.028 2.346-.57.57-1.34.896-2.619 1.068-1.3.175-3.008.176-5.386.176s-4.086-.001-5.386-.176c-1.279-.172-2.05-.499-2.62-1.068-.569-.57-.896-1.34-1.068-2.62-.174-1.3-.176-3.007-.176-5.386 0-2.378.002-4.086.176-5.386.172-1.278.5-2.05 1.069-2.619.528-.528 1.23-.847 2.345-1.028 1.138-.184 2.621-.212 4.661-.216Z"
      />
      <path
        fill="currentColor"
        d="M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0-.75.75Z"
      />
    </svg>
  );
};
export default SvgScale;