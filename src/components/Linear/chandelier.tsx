import * as React from "react";
import type { SVGProps } from "react";
const SvgChandelier = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9 4h6M12 4v12.5a3.5 3.5 0 1 0 7 0v-.056"
      />
      <path
        stroke="currentColor"
        
        d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 4v12.5a3.5 3.5 0 1 1-7 0v-.056"
      />
      <path
        stroke="currentColor"
        
        d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0v-2.143Z"
      />
    </svg>
  );
};
export default SvgChandelier;
