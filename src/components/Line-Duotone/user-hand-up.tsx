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
        strokeLinejoin="round"
        
        d="m20 21.5-.65-5.52C19.15 14.28 17.71 13 16 13H8c-3 0-4.933-2.731-5.618-5.472L2 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 13v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-5"
        opacity={0.5}
      />
      <circle
        cx={12}
        cy={6}
        r={4}
        stroke="currentColor"
        
        opacity={0.9}
      />
    </svg>
  );
};
export default SvgUserHandUp;
