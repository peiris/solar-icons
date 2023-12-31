import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.22 1.646a4.203 4.203 0 0 1 3.56 0c2.176 1.017 3.914 2.92 5.104 5.112 1.192 2.194 1.866 4.734 1.866 7.099 0 4.899-3.905 8.893-8.75 8.893-4.845 0-8.75-3.994-8.75-8.893 0-2.365.674-4.905 1.866-7.099 1.19-2.191 2.928-4.095 5.104-5.112Zm1.03 1.21a2.722 2.722 0 0 0-.395.149c-1.809.845-3.339 2.476-4.421 4.469-1.081 1.99-1.684 4.286-1.684 6.383 0 3.836 2.858 6.971 6.5 7.354V2.856Zm1.5 0V7.19l2.628-2.628a8.402 8.402 0 0 0-2.233-1.556 2.722 2.722 0 0 0-.395-.149Zm3.636 2.818L12.75 9.311v3.378l4.954-4.954a12.668 12.668 0 0 0-1.318-2.06Zm1.972 3.529L12.75 14.81v2.878l6.22-6.22.047.049a14.144 14.144 0 0 0-.66-2.315Zm.88 4.12-6.488 6.488v1.4c3.642-.383 6.5-3.518 6.5-7.354 0-.177-.004-.355-.013-.534Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLeaf;
