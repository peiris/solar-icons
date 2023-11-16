import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => {
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
        d="m21.391 16.336.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87 5.006 5.006 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .608-1.376L3.903 15h16.194l1.294 1.336ZM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75ZM4.353 7c0-1.886 0-2.828.586-3.414C5.525 3 6.467 3 8.353 3h7.294c1.886 0 2.829 0 3.414.586.586.586.586 1.528.586 3.414v7H4.353V7ZM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLaptop;
