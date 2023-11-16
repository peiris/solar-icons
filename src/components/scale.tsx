import * as React from "react";
import type { SVGProps } from "react";
const SvgScale = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M11 2c-4.055.007-6.178.107-7.536 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.464 8.536C4.93 21.999 7.286 21.999 12 21.999c4.714 0 7.071 0 8.535-1.464 1.358-1.357 1.457-3.48 1.464-7.536M13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8" />
    </svg>
  );
};
export default SvgScale;
