import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.75 16a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Z"
      />
    </svg>
  );
};
export default SvgKeyboard;
