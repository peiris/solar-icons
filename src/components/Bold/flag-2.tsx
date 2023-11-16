import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.677 8.677 0 0 1 4.925.452l.413.165a7.3 7.3 0 0 0 4.482.304.73.73 0 0 1 .803 1.084l-1.278 2.131c-.342.57-.513.854-.553 1.163-.017.13-.017.26 0 .39.04.309.211.594.553 1.163l1.56 2.6a.9.9 0 0 1-.553 1.336l-.1.025a8.677 8.677 0 0 1-5.327-.361 8.676 8.676 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1Z"
      />
    </svg>
  );
};
export default SvgFlag2;
