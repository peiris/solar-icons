import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2M17.05 18.05l-.55-.55M6 19.05 7.05 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12.5 13a2 2 0 1 0 2-2"
      />
      <path
        stroke="currentColor"
        
        d="M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <circle cx={9} cy={13} r={1} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.56 5.56a1.5 1.5 0 1 1 0-2.12M2 3.5A1.5 1.5 0 1 0 3.5 2"
      />
      <path
        stroke="currentColor"
        
        d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.05 19.55a1.5 1.5 0 1 0-1.5 1.5M3.44 19.44a1.5 1.5 0 1 1 0 2.12"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 13.5a1.5 1.5 0 1 0-.5-2.915v2.83c.156.055.325.085.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0h-2.83Z"
      />
    </svg>
  );
};
export default SvgVirus;
