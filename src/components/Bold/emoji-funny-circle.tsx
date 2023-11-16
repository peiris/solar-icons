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
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-3.815-6.25a.75.75 0 0 1 .91-.544c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.044 1.077 8.398 8.398 0 0 1-1.15.93l.159.321a1.5 1.5 0 0 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Zm7.29-6.234c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19-.215-.8.044-1.564.577-1.707.534-.143 1.14.39 1.354 1.19Zm-6.373 3.26c.534-.143.792-.907.578-1.707-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.707.215.8.82 1.333 1.354 1.19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEmojiFunnyCircle;
