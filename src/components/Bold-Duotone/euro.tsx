import * as React from "react";
import type { SVGProps } from "react";
const SvgEuro = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M6.75 12c0-.255.018-.505.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298.75.75 0 1 0 .75-1.299A6.753 6.753 0 0 0 5.635 9.75H5a.75.75 0 0 0 0 1.5h.291a6.823 6.823 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596.75.75 0 1 0-.751-1.298 5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5.295 5.295 0 0 1 6.75 12Z"
      />
    </svg>
  );
};
export default SvgEuro;
