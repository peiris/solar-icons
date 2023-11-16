import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 10h-4M22 13h-3M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028.079.065a2.994 2.994 0 0 0 2.069.66M18.5 2l-.523.523A2.993 2.993 0 0 1 16 3.436M16 2v1.436m0 0V6" />
      <path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414C20.828 6 19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586C10 7.172 10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.334 2.334 0 0 0 22 16.507Z" />
    </svg>
  );
};
export default SvgDropper;