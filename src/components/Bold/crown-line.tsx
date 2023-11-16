import * as React from "react";
import type { SVGProps } from "react";
const SvgCrownLine = (props: SVGProps<SVGSVGElement>) => {
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
        d="m21.838 11.126-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22H10.64c-3.545 0-5.317 0-6.5-1.21-1.183-1.21-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a.992.992 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998.618.704.927 1.055 1.271 1.11.191.03.386-.001.562-.09.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2c.61 0 1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464.176.089.37.12.562.09.344-.055.653-.406 1.271-1.11 1.195-1.36 1.792-2.04 2.268-1.998a.992.992 0 0 1 .675.367c.327.395.237 1.352.057 3.264ZM8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCrownLine;
