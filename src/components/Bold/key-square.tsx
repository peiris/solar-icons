import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.208 11.093c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm10.744 10.088A3.784 3.784 0 0 0 18 9.776 3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0 .441-.615 0-1.23 0-1.23a1.019 1.019 0 0 0-.177-.239c-.138-.15-.222-.241.089-.551l.53-.527c.422.351 1.292.44 1.674.44Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeySquare;
