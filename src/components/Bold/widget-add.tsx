import * as React from "react";
import type { SVGProps } from "react";
const SvgWidgetAdd = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 6.5c0-2.121 0-3.182.659-3.841C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.659C11 3.318 11 4.379 11 6.5c0 2.121 0 3.182-.659 3.841C9.682 11 8.621 11 6.5 11c-2.121 0-3.182 0-3.841-.659C2 9.682 2 8.621 2 6.5ZM13 17.5c0-2.121 0-3.182.659-3.841C14.318 13 15.379 13 17.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659-2.121 0-3.182 0-3.841-.659C13 20.682 13 19.621 13 17.5ZM2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z"
      />
    </svg>
  );
};
export default SvgWidgetAdd;