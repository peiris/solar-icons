import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.793 9.88c.873-.01 1.759.232 2.51.739l7.433 5.01c.95.64 1.207 1.697.877 2.588-.325.876-1.191 1.533-2.316 1.533H3.702c-1.112 0-1.974-.645-2.306-1.51-.338-.88-.1-1.931.828-2.583l7.095-4.991a4.391 4.391 0 0 1 2.473-.786Zm1.672 1.983a2.906 2.906 0 0 0-1.655-.483 2.891 2.891 0 0 0-1.628.512l-7.095 4.992c-.346.242-.391.557-.29.818.105.276.403.548.905.548h16.595c.509 0 .806-.277.91-.555.097-.263.047-.582-.31-.822l-7.432-5.01Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.285 6.91c0-.568.538-1.16 1.374-1.16.836 0 1.374.592 1.374 1.16 0 .311-.111.581-.293.78-.113.122-.238.245-.38.385l-.08.08a8.953 8.953 0 0 0-.53.558c-.265.312-.552.724-.658 1.23a4.527 4.527 0 0 1 1.596.016c.051-.08.118-.172.205-.274.127-.149.274-.298.441-.464l.074-.072c.141-.14.296-.292.436-.445.442-.48.69-1.115.69-1.795 0-1.542-1.365-2.659-2.875-2.659S8.785 5.367 8.785 6.91a.75.75 0 1 0 1.5 0Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHanger;