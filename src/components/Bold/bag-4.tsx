import * as React from "react";
import type { SVGProps } from "react";
const SvgBag4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079C19.76 22 18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098-.9-1.098-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143.606-.496 1.396-.63 2.693-.667ZM9.75 6a2.25 2.25 0 0 1 4.5 0v1H9.75V6ZM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBag4;
