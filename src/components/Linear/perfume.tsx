import * as React from "react";
import type { SVGProps } from "react";
const SvgPerfume = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4M10 7c-4.418 0-8 3.356-8 7.495 0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495 18 10.355 14.418 7 10 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98 2.996.338 4.564-2.156 7.538-1.662 1.048.174 2.025.474 2.602.794"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-1.196-.69-1.717-2.026-1.165-2.982.552-.957 1.97-1.173 3.165-.482Z"
      />
    </svg>
  );
};
export default SvgPerfume;
