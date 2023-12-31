import * as React from "react";
import type { SVGProps } from "react";
const SvgForbiddenCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M18.521 4.418 4.418 18.521a10.127 10.127 0 0 0 1.06 1.061L19.583 5.479a10.105 10.105 0 0 0-1.06-1.06Z"
      />
    </svg>
  );
};
export default SvgForbiddenCircle;
