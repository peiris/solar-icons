import * as React from "react";
import type { SVGProps } from "react";
const SvgCart4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047.436.539.576 1.209.525 2.136H2.853c-.051-.927.09-1.597.525-2.136.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67C8.319 7 8.846 7 9.422 7h5.156c.576 0 1.103 0 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.555 14.257a73.837 73.837 0 0 1-.51-2.507h17.91c-.126.714-.303 1.541-.51 2.507l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2ZM10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCart4;
