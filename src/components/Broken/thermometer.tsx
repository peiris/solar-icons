import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M13.303 5l.82-.82a4.028 4.028 0 1 1 5.697 5.696l-8.942 8.943a3.02 3.02 0 0 1-2.47.866l-.8-.089a2.014 2.014 0 0 0-1.646.578l-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.014 2.014 0 0 0 .578-1.647l-.09-.799a3.021 3.021 0 0 1 .867-2.47L10.303 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m9 15 6.5-6.5"
      />
    </svg>
  );
};
export default SvgThermometer;
