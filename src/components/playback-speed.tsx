import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaybackSpeed = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2" />
      <path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787Z" />
    </svg>
  );
};
export default SvgPlaybackSpeed;
