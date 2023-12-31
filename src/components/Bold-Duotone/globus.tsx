import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobus = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={10} r={7} fill="currentColor" opacity={0.3} />
      <path
        fill="currentColor"
        d="M9.602 8.213C9.471 6.754 8.346 5.395 7.8 4.897l-.302-.258A6.972 6.972 0 0 1 12 3c1.55 0 2.98.503 4.14 1.356.164.497-.148 1.536-.475 2.033-.12.18-.388.404-.683.616-.666.478-1.505.715-1.932 1.595a.99.99 0 0 0-.058.711c.042.154.069.321.07.485 0 .528-.534.91-1.062.904-1.375-.015-2.275-1.123-2.398-2.487ZM13.006 14.394c.691-1.304 2.997-1.304 2.997-1.304 2.402-.025 2.727-1.484 2.944-2.22a7.004 7.004 0 0 1-5.975 6.063c-.226-.475-.493-1.546.034-2.54Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.004 1.5a.75.75 0 0 1 1.058-.059 11.037 11.037 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.037 11.037 0 0 1-7.809-3.678.75.75 0 1 1 1.118-1 9.537 9.537 0 0 0 7.128 3.187 9.563 9.563 0 0 0 9.563-9.563 9.537 9.537 0 0 0-3.188-7.128.75.75 0 0 1-.059-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGlobus;
