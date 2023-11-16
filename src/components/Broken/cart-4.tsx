import * as React from "react";
import type { SVGProps } from "react";
const SvgCart4 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 11h4m14 0H11M10 14h4M18 9l-3-6M6 9l3-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.67.83.643 1.972.288 3.886"
      />
    </svg>
  );
};
export default SvgCart4;
