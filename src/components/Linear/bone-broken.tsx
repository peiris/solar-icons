import * as React from "react";
import type { SVGProps } from "react";
const SvgBoneBroken = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562ZM2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.268 6.268 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 0 0 0 3.563Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17.657 17.657 1.414 1.414M6.343 6.343 4.93 4.93M15 19v1M5 9H4M19 15h1M9 5V4"
      />
    </svg>
  );
};
export default SvgBoneBroken;
