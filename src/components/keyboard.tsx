import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M7 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2ZM7 16h10" />
    </svg>
  );
};
export default SvgKeyboard;
