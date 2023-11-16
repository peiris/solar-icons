import * as React from "react";
import type { SVGProps } from "react";
const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={11} r={2} />
      <path d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM13.5 13l5 9M10.5 13l-5 9" />
      <path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0l-4.795-2.614a3 3 0 0 1-1.563-2.634V9.03a3 3 0 0 1 1.563-2.634l4.795-2.614Z" />
    </svg>
  );
};
export default SvgFerrisWheel;
