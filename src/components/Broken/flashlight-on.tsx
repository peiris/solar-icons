import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M15 22v-4.343c0-.818 0-1.226.152-1.594.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707C19.414 8 18.943 8 18 8h-1M9 22v-4.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707C4.586 8 5.057 8 6 8h7M15 16H9M4.5 11h15M12 5V2M8 5 6 3M16 5l2-2M12 19v2"
      />
    </svg>
  );
};
export default SvgFlashlightOn;
