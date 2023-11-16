import * as React from "react";
import type { SVGProps } from "react";
const SvgTagHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9.721 20h2.637c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379 0-.914-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C15.699 3 14.585 3 12.358 3H9.721C5.846 3 3.908 3 2.704 4.245 1.5 5.49 1.5 7.493 1.5 11.5s0 6.01 1.204 7.255S5.846 20 9.72 20Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6.5 6.995V16"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTagHorizontal;
