import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquareMinimalisticCharge = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12.857 9 10 12h4l-2.857 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 2h10M7 22h10M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025C5 7.05 5 8.7 5 12s0 4.95 1.025 5.975C7.05 19 8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"
      />
    </svg>
  );
};
export default SvgWatchSquareMinimalisticCharge;
