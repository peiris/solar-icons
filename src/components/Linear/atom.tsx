import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413 4.94 4.939 10.945 6.94 13.414 4.471 2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default SvgAtom;
