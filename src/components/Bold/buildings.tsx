import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15 2h2c1.886 0 2.828 0 3.414.586C21 3.172 21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h4c1.886 0 2.828 0 3.414.586C15 6.172 15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304-.095-.711-.32-1.463-.938-2.08-.618-.619-1.37-.844-2.08-.94-.637-.085-1.418-.086-2.269-.086.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2ZM5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBuildings;
