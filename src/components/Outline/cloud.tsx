import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.476 4.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Zm6.355 3.721c-.559-2.977-3.197-5.221-6.355-5.221-3.562 0-6.464 2.856-6.464 6.397 0 .387.035.767.102 1.135-2.694.09-4.864 2.278-4.864 4.983 0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397 0-2.644-1.619-4.905-3.919-5.882Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloud;
