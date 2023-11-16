import * as React from "react";
import type { SVGProps } from "react";
const SvgCardholder = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 10.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5h-2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 6h-2c-1.886 0-2.828 0-3.414.586C7 7.172 7 8.114 7 10v.25h10V10c0-1.886 0-2.828-.586-3.414C15.828 6 14.886 6 13 6Z"
        opacity={0.7}
      />
    </svg>
  );
};
export default SvgCardholder;
