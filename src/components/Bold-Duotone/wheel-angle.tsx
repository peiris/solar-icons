import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelAngle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M4.433 4.773C3.557 6.595 3 9.15 3 12c0 2.85.557 5.405 1.433 7.227C5.333 21.1 6.461 22 7.5 22c1.039 0 2.166-.9 3.067-2.773C11.443 17.405 12 14.85 12 12c0-2.85-.557-5.405-1.433-7.227C9.667 2.9 8.539 2 7.5 2c-1.039 0-2.166.9-3.067 2.773ZM5.813 12c0 3.488.755 6.316 1.687 6.316.86 0 1.57-2.411 1.674-5.526H8.063c-.466 0-.844-.354-.844-.79 0-.436.378-.79.843-.79h1.112C9.071 8.095 8.361 5.685 7.5 5.685c-.932 0-1.687 2.828-1.687 6.316Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.567 19.227C9.667 21.1 8.539 22 7.5 22h8.872C18.928 22 21 17.523 21 12S18.928 2 16.372 2H7.5c1.039 0 2.166.9 3.067 2.773C11.443 6.595 12 9.15 12 12c0 2.85-.557 5.405-1.433 7.227Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWheelAngle;
