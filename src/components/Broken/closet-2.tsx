import * as React from "react";
import type { SVGProps } from "react";
const SvgCloset2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M19 22v-1.5M5 22v-1.5M12 20v-2m0-16v12M15 9v4M9 9v4M22 10c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172.944-.943 1.127-2.348 1.163-4.828"
      />
    </svg>
  );
};
export default SvgCloset2;
