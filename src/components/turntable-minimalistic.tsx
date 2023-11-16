import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m14 10.5 2.555-1.703A1 1 0 0 0 17 7.965V2.5" />
      <path d="M17 12a5 5 0 1 1-3.5-4.771" />
      <path d="M12 14a2 2 0 0 1-2-2" />
    </svg>
  );
};
export default SvgTurntableMinimalistic;