import * as React from "react";
import type { SVGProps } from "react";
const SvgPassword = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12ZM12 10v4m-1.732-3 3.464 2m0-2-3.464 2M6.733 10v4M5 11l3.464 2m0-2L5 13M17.268 10v4m-1.732-3L19 13m0-2-3.465 2" />
    </svg>
  );
};
export default SvgPassword;
