import * as React from "react";
import type { SVGProps } from "react";
const SvgProjector = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.25 9.5a.75.75 0 1 0-1.5 0V11a.75.75 0 1 0 1.5 0V9.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 9A5 5 0 1 1 9 9a5 5 0 0 1 10 0Zm-5.75-2a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 14a5 5 0 0 0 4.014-7.982c.757.023 1.364.077 1.863.2.518.13.918.335 1.244.66C22 7.759 22 9.173 22 12s0 4.243-.879 5.121c-.547.547-1.301.754-2.475.832l.997 1.661a.75.75 0 1 1-1.286.772l-1.433-2.387L16 18H8l-.925-.001-1.432 2.387a.75.75 0 1 1-1.286-.772l.997-1.661c-1.174-.078-1.928-.285-2.475-.832C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h2a5 5 0 0 0 4 8Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgProjector;
