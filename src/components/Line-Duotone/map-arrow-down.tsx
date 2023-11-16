import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowDown = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M12 5.527c-.25 0-.5-.061-.73-.184L5.368 2.191c-1.388-.74-2.87.81-2.202 2.306l7.362 16.51c.296.662.884.993 1.473.993"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 5.527c.25 0 .5-.061.73-.184l5.903-3.152c1.388-.74 2.87.81 2.202 2.306l-7.363 16.51C13.178 21.67 12.59 22 12 22"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMapArrowDown;