import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothSquare = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11 12 2.933-2.2c.49-.366.734-.55.734-.8s-.245-.433-.734-.8l-1.333-1c-.698-.523-1.047-.785-1.324-.647C11 6.691 11 7.128 11 8v4Zm0 0v4c0 .873 0 1.31.276 1.448.277.138.626-.124 1.324-.648l1.333-1c.49-.366.734-.55.734-.8s-.245-.433-.734-.8L11 12Zm0 0L8 9.5m3 2.5-3 2.5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBluetoothSquare;
