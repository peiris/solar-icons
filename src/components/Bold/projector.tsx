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
        fillRule="evenodd"
        d="M4.614 20.643a.75.75 0 0 0 1.03-.257l1.431-2.387L8 18h8l.924-.001 1.433 2.387a.75.75 0 1 0 1.286-.772l-.997-1.661c1.174-.078 1.928-.285 2.475-.832C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121-.326-.326-.726-.532-1.244-.66A6.5 6.5 0 1 1 8.233 6H8c-2.828-.001-4.243-.001-5.121.878C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121.547.547 1.301.754 2.475.832l-.997 1.661a.75.75 0 0 0 .257 1.03ZM5.5 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-.75-7a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgProjector;
