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
        strokeWidth={1.5}
        d="M9 22v-4.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707C4.586 8 5.057 8 6 8h12c.943 0 1.414 0 1.707.293C20 8.586 20 9.057 20 10v.172c0 .408 0 .613-.076.797-.076.183-.22.328-.51.617l-3.242 3.242c-.578.579-.867.867-1.02 1.235-.152.368-.152.776-.152 1.594V22M15 16H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.5 11h15M12 5V2"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 5 6 3M16 5l2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 19v2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgFlashlightOn;
