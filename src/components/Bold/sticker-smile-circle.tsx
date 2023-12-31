import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSmileCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.936 13.1c.868-.303 1.947-.344 4.203-.35h1.585c-.007.109.01-.107 0 0a1.643 1.643 0 0 1-.471 1.01l-8.508 8.55a1.403 1.403 0 0 1-.994.414c-.108.01.108-.007 0 0V21.14c.005-2.256.046-3.335.35-4.203a6.25 6.25 0 0 1 3.835-3.835Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.552 16.88c-.276 1.064-.3 2.364-.302 4.34v1.504c-5.587-.385-10-5.039-10-10.724C1.25 6.063 6.063 1.25 12 1.25c5.685 0 10.34 4.413 10.724 10H21.22c-2.257.002-3.633.034-4.78.435a7.75 7.75 0 0 0-4.243 3.602.766.766 0 0 0-.057.007 7.354 7.354 0 0 1-3.045-.088.75.75 0 0 0-.365 1.455c.886.222 1.842.3 2.822.22Zm3.346-5.657c.533-.143.792-.907.577-1.707-.214-.8-.82-1.333-1.354-1.19-.533.143-.792.907-.578 1.707.215.8.821 1.333 1.355 1.19Zm-5.796 1.553c.534-.143.792-.907.578-1.707-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.707.215.8.82 1.333 1.354 1.19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStickerSmileCircle;
