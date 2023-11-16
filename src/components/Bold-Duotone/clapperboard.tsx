import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46-.857.858-1.213 2.022-1.36 3.786h4.494l3.497-5.246ZM21.896 7.25c-.148-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.338-1.16L14.901 7.25h6.995ZM16.54 2.088C15.33 2 13.845 2 12 2H11.9l-3.5 5.25h4.697l3.442-5.162Z"
      />
      <path
        fill="currentColor"
        d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25H2.026Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgClapperboard;
