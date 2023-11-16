import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHandUp = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M8 13h8c1.71 0 3.15 1.28 3.35 2.98L20 21.5M8 13a7.459 7.459 0 0 1-5.618-5.472L2 6m6 7v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-1"
      />
      <circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgUserHandUp;