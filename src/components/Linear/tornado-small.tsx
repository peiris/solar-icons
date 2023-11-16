import * as React from "react";
import type { SVGProps } from "react";
const SvgTornadoSmall = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 5c-4.97 0-9 .672-9 1.5S7.03 8 12 8s9-.672 9-1.5c0-.52-1.588-.978-4-1.247M20 10s-2.791 1-8.276 1C6.24 11 4 10 4 10M16 16s-1.258.5-4 .5-4-.5-4-.5M16 18.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245M18 13s-.515 1-6 1m-6-1s.219.425 1.892.721"
      />
    </svg>
  );
};
export default SvgTornadoSmall;
