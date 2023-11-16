import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M19.01 13.1c2.653-2.54 2.653-6.656 0-9.196-2.652-2.539-6.953-2.539-9.606 0M7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284 2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l3.974-3.804M3 10.034 6.202 6.97"
      />
    </svg>
  );
};
export default SvgPaperclip;
