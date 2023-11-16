import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointSchool = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
      <path d="M11.224 6.636a2.278 2.278 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.278 2.278 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016l2.342-.856Z" />
      <path d="M14.5 9v2.7a.923.923 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.923.923 0 0 1-.59-.879V9" />
    </svg>
  );
};
export default SvgMapPointSchool;
