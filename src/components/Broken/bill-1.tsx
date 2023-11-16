import * as React from "react";
import type { SVGProps } from "react";
const SvgBill1 = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 2h20M8.049 18.53C9.932 20.178 10.873 21 12 21c1.127 0 2.069-.823 3.951-2.47l2-1.748c1.008-.882 1.513-1.322 1.78-1.913.269-.59.269-1.26.269-2.599V9.702M20 6V2H4v10.27c0 1.34 0 2.009.268 2.6.175.385.451.707.903 1.13M8.5 13h7M8.5 8h7"
      />
    </svg>
  );
};
export default SvgBill1;
