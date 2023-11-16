import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerLow = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2"
      />
      <path
        stroke="currentColor"
        
        d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346-.32 1.459-.481 2.188.1 2.77.58.58 1.31.42 2.768.098.975-.214 1.9-.525 2.346-.971Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 21.542C4.943 20.268 2 16.478 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"
      />
    </svg>
  );
};
export default SvgSpedometerLow;
