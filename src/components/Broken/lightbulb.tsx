import * as React from "react";
import type { SVGProps } from "react";
const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 17v-2M13.732 14a2 2 0 0 1-3.464 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307.123-.763.144-.812.631-1.412.151-.186.711-.688 1.832-1.692A7.481 7.481 0 0 0 19.5 9.5c0-.877-.15-1.718-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307-.123-.763-.144-.812-.631-1.412-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3"
      />
    </svg>
  );
};
export default SvgLightbulb;
