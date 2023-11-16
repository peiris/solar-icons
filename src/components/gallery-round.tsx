import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryRound = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={16} cy={8} r={2} />
      <path d="m2 10.154.98-.141C9.96 9.01 15.925 15.03 14.858 22" />
      <path d="m22 13.385-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" />
    </svg>
  );
};
export default SvgGalleryRound;
