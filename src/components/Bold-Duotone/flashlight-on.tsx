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
        fill="currentColor"
        d="M9 19v-1.343c0-.818 0-1.226-.152-1.594A1.48 1.48 0 0 0 8.82 16h6.36c-.01.02-.019.042-.027.063-.153.368-.153.776-.153 1.594V20c0 .943 0 1.414-.293 1.707C14.416 22 13.944 22 13 22h-2c-.942 0-1.414 0-1.707-.293C9 21.414 9 20.943 9 20v-1Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20 10.172V10c0-.943 0-1.414-.293-1.707C19.414 8 18.943 8 18 8H6c-.943 0-1.414 0-1.707.293C4 8.586 4 9.057 4 10v.172c0 .408 0 .613.076.797L4.09 11h15.82l.014-.031c.076-.184.076-.389.076-.797Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m16.171 14.828 3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172ZM12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06l-2-2ZM18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  );
};
export default SvgFlashlightOn;
