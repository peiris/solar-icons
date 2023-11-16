import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.2 9.593 11 12V7.623c0-.954 0-1.432.302-1.583.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876 0 .273-.267.474-.8.875ZM14.2 16.158l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875 0 .274-.267.475-.8.876Z"
      />
      <path
        fill="currentColor"
        d="M8.48 8.924a.75.75 0 1 0-.96 1.152l.96-1.152Zm3 2.5-3-2.5-.96 1.152 3 2.5.96-1.152Z"
      />
      <path
        fill="currentColor"
        d="M8.48 15.076a.75.75 0 0 1-.96-1.152l.96 1.152Zm3-2.5-3 2.5-.96-1.152 3-2.5.96 1.152Z"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgBluetoothCircle;
