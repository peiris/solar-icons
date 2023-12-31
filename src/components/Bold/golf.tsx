import * as React from "react";
import type { SVGProps } from "react";
const SvgGolf = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504.054.027c.734.367 1.36.68 1.796.984.442.309.906.757.906 1.449 0 .693-.464 1.14-.906 1.449-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-1.567 10-3.5 0-1.662-3.31-3.054-7.75-3.411V18a2.25 2.25 0 0 1-4.5 0v-2.911C5.31 15.446 2 16.838 2 18.5 2 20.433 6.477 22 12 22Z"
      />
      <path
        fill="currentColor"
        d="M12 1.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0v-5.036l5.062-2.531c.734-.367 1.36-.68 1.796-.984.442-.309.906-.756.906-1.449 0-.692-.464-1.14-.906-1.449-.436-.304-1.062-.617-1.796-.984l-5.062-2.53V2a.75.75 0 0 0-.75-.75Z"
      />
    </svg>
  );
};
export default SvgGolf;
