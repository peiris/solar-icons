import * as React from "react";
import type { SVGProps } from "react";
const SvgEmojiFunnyCircle = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14.898 11.224c.533-.143.792-.908.578-1.708-.215-.8-.821-1.333-1.355-1.19-.533.143-.792.907-.577 1.708.214.8.82 1.333 1.354 1.19ZM9.102 12.777c.534-.143.792-.908.578-1.708-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.708.215.8.82 1.333 1.354 1.19ZM8.185 15.751a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066 1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078 8.398 8.398 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Z"
      />
    </svg>
  );
};
export default SvgEmojiFunnyCircle;
