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
        d="M13.933 9.8 11 12V8c0-.872 0-1.309.276-1.447.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8ZM13.933 15.8l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        fill="currentColor"
        d="M8.48 8.924a.75.75 0 1 0-.96 1.152l.96-1.152Zm3 2.5-3-2.5-.96 1.152 3 2.5.96-1.152Z"
      />
      <path
        fill="currentColor"
        d="M8.48 15.076a.75.75 0 0 1-.96-1.152l.96 1.152Zm3-2.5-3 2.5-.96-1.152 3-2.5.96 1.152Z"
      />
    </svg>
  );
};
export default SvgBluetoothSquare;
