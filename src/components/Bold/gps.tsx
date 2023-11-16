import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V19.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H19.41a7.444 7.444 0 0 0-6.712-6.712V2.698a.698.698 0 0 0-1.396 0V4.59a7.444 7.444 0 0 0-6.712 6.712H2.698A.698.698 0 0 0 2 12Zm6.512 0a3.488 3.488 0 1 1 6.976 0 3.488 3.488 0 0 1-6.976 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.907 12a2.093 2.093 0 1 1 4.186 0 2.093 2.093 0 0 1-4.186 0Z"
      />
    </svg>
  );
};
export default SvgGps;
