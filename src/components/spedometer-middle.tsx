import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerMiddle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" />
      <path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z" />
    </svg>
  );
};
export default SvgSpedometerMiddle;
