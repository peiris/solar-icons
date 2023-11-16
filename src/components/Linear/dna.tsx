import * as React from "react";
import type { SVGProps } from "react";
const SvgDna = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m11.848 12.152.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152.191.558c1.048 3.041.046 6.705-2.539 9.29M6.765 11.843l5.078 5.079M11.844 6.765l5.078 5.078M4 13l3.5 3.5M19.778 10.89l-3.5-3.5M9.305 18.191l1.587 1.587M14.587 5.587 13 4"
      />
    </svg>
  );
};
export default SvgDna;
