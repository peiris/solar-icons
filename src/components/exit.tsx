import * as React from "react";
import type { SVGProps } from "react";
const SvgExit = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732h1M9 6.476c0-2.293 0-3.44.707-4.067.707-.627 1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062C9 20.964 9 19.817 9 17.524V6.476ZM12 11v2" />
    </svg>
  );
};
export default SvgExit;
