import * as React from "react";
import type { SVGProps } from "react";
const SvgHikingMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.069.686a1.536 1.536 0 0 0 .715 1.455l.333.208a6.586 6.586 0 0 1 3.07 5.001l.142 1.607a.75.75 0 0 1-1.494.134l-.143-1.608a5.086 5.086 0 0 0-2.37-3.862l-.333-.208a3.036 3.036 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.378 4.378 0 0 0 4.738-.563l.154-.128V7a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.19 15.775c.401.105.64.515.535.916v.002l-.001.005-.005.016-.016.058a15.858 15.858 0 0 1-.28.893c-.18.525-.455 1.223-.795 1.745-.357.548-.918 1.101-1.35 1.493a15.9 15.9 0 0 1-.751.637l-.05.04-.014.01-.005.004a.75.75 0 0 1-.916-1.188l.003-.002.01-.007.04-.033a14.343 14.343 0 0 0 .675-.573c.417-.377.856-.823 1.102-1.2.234-.36.46-.911.635-1.416a14.274 14.274 0 0 0 .25-.804l.014-.048.003-.011v-.002a.75.75 0 0 1 .917-.535Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHikingMinimalistic;
