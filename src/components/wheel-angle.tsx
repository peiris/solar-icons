import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelAngle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12 5.015 2 7.5 2 12 6.477 12 12Z" />
      <path d="M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2" />
      <path d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12ZM7.5 2h9M7.5 22h9M9 12H8" />
    </svg>
  );
};
export default SvgWheelAngle;
