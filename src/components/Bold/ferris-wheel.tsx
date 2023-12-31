import * as React from "react";
import type { SVGProps } from "react";
const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0 3.71 3.71 0 0 0-.097.052L5.41 5.739a3.758 3.758 0 0 0-.241.143 1.75 1.75 0 0 0-1.711 3.023 3.759 3.759 0 0 0-.002.126v4.938c0 .2.016.399.047.593a1.75 1.75 0 1 0 2.095 2.801l1.307.713-2.054 3.548a.75.75 0 0 0 1.298.752l2.074-3.581 1.982 1.08.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052 1.983-1.08 2.073 3.58a.75.75 0 0 0 1.298-.75l-2.054-3.549 1.307-.713a1.75 1.75 0 1 0 2.095-2.801c.031-.195.047-.393.047-.593V9.03c0-.042 0-.083-.002-.125a1.75 1.75 0 0 0-1.711-3.024 3.756 3.756 0 0 0-.242-.143l-4.794-2.614a3.53 3.53 0 0 0-.097-.052Zm-3.061 1.524a1.747 1.747 0 0 0 2.726 0l4.452 2.428a1.75 1.75 0 0 0 1.229 2.165v4.779c0 .118-.01.234-.027.349A1.75 1.75 0 0 0 17.75 16v.01l-1.407.767-2.691-4.649a2 2 0 1 0-3.303 0l-2.692 4.65-1.407-.767V16c0-.8-.536-1.473-1.267-1.683a2.251 2.251 0 0 1-.027-.348V9.19a1.75 1.75 0 0 0 1.229-2.165l4.452-2.428ZM8.974 17.496l1.663.907a1.747 1.747 0 0 1 2.726 0l1.663-.907L12.4 12.96a2.008 2.008 0 0 1-.8 0l-2.626 4.536Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFerrisWheel;
