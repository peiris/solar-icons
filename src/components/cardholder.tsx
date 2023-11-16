import * as React from "react";
import type { SVGProps } from "react";
const SvgCardholder = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
      <path d="M17 11v-1c0-1.886 0-2.828-.586-3.414C15.828 6 14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586C7 7.172 7 8.114 7 10v1M5 11h14M8 16h8" />
    </svg>
  );
};
export default SvgCardholder;
