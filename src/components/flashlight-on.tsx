import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M15 22v-4.343c0-.818 0-1.226.152-1.594.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707C19.414 8 18.943 8 18 8H6c-.943 0-1.414 0-1.707.293C4 8.586 4 9.057 4 10v.172c0 .408 0 .613.076.797.076.183.22.328.51.617l3.242 3.242c.578.579.868.867 1.02 1.235.152.368.152.776.152 1.594V22M15 16H9M4.5 11h15M12 5V2M8 5 6 3M16 5l2-2M12 19v2" />
    </svg>
  );
};
export default SvgFlashlightOn;
