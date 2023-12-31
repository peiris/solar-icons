import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 5.5a1.5 1.5 0 0 1-1.889 1.45l-.63.63a.762.762 0 0 1-.073.064 7.106 7.106 0 0 1 1.409 2.867A1.5 1.5 0 1 1 19 13.5h-.138a6.826 6.826 0 0 1-1.837 3.454l1.136 1.147a1.503 1.503 0 0 1 1.889 1.449 1.5 1.5 0 1 1-2.95-.389l-1.13-1.13a.756.756 0 0 1-.105-.132 6.84 6.84 0 0 1-1.527.738l-.216.613a2.25 2.25 0 0 1-4.244 0l-.247-.7a7.109 7.109 0 0 1-1.4-.712l-1.377 1.41A2 2 0 1 1 5.81 18.17l1.255-1.286a7.143 7.143 0 0 1-1.75-2.909 2 2 0 1 1-.061-3.96 6.845 6.845 0 0 1 1.255-2.445l-.728-.728a2 2 0 1 1 1.06-1.06l.729.727a6.853 6.853 0 0 1 3.68-1.48v-.23a1.5 1.5 0 1 1 1.5 0v.254a7.086 7.086 0 0 1 3.606 1.538.767.767 0 0 1 .064-.071l.63-.631A1.5 1.5 0 1 1 20 5.5ZM11.75 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm-1.25-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      />
    </svg>
  );
};
export default SvgVirus;
