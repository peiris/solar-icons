import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 9v3.077L14 14"
      />
      <path
        stroke="currentColor"
        
        d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692l-.08.368"
      />
      <path
        stroke="currentColor"
        
        d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692l-.08.368M16.778 18.5l-.082.368c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692l-.08-.368"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025C5 7.05 5 8.7 5 12s0 4.95 1.025 5.975C7.05 19 8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"
      />
    </svg>
  );
};
export default SvgWatchSquare;
