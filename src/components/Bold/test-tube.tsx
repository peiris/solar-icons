import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.267 1.618a.75.75 0 0 1 1.027-.264l.832.492 9.247 5.307a.75.75 0 1 1-.747 1.301l-.843-.484-1.505 2.598-.002-.002-2.558-1.471a.75.75 0 1 0-.748 1.3l2.556 1.47-.961 1.66-.002-.001-4.203-2.418a.75.75 0 1 0-.748 1.3l4.2 2.417-.885 1.529-.002-.002-2.613-1.503a.75.75 0 0 0-.748 1.3l2.611 1.502-1.12 1.932a4.862 4.862 0 0 1-6.628 1.77 4.827 4.827 0 0 1-1.776-6.605L9.373 3.143l-.006-.003-.836-.494a.75.75 0 0 1-.264-1.028ZM20 17c1.105 0 2-.933 2-2.083 0-.72-.783-1.681-1.37-2.3a.862.862 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083Z"
      />
    </svg>
  );
};
export default SvgTestTube;
