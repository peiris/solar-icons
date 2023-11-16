import * as React from "react";
import type { SVGProps } from "react";
const SvgCupPaper = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.815 2h-5.63c-1.837 0-2.756 0-3.479.444a2.999 2.999 0 0 0-.355.257c-.65.545-.942 1.416-1.523 3.16l-.036.107c-.319.955-.478 1.433-.31 1.794a1 1 0 0 0 .219.303c.289.274.793.274 1.8.274h13c1.007 0 1.51 0 1.8-.274.09-.086.165-.19.218-.303.168-.361.009-.839-.31-1.794l-.036-.107c-.581-1.744-.872-2.615-1.522-3.16a3 3 0 0 0-.356-.257C17.572 2 16.653 2 14.815 2Z"
      />
      <path
        fill="currentColor"
        d="M10.958 22h2.086c1.649 0 2.473 0 3.036-.487.564-.487.683-1.302.922-2.934L18.5 8.34h-13l1.5 10.24c.238 1.632.357 2.447.92 2.934C8.486 22 9.31 22 10.959 22Z"
        opacity={0.5}
      />
      <path fill="currentColor" d="M6.77 17h10.463l.732-5H6.037l.732 5Z" />
    </svg>
  );
};
export default SvgCupPaper;
