import * as React from "react";
import type { SVGProps } from "react";
const SvgFlame = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 15c0 4.255-2.618 6.122-4.641 6.751-.432.134-.715-.369-.457-.74.88-1.265 1.898-3.195 1.898-5.01 0-1.951-1.644-4.254-2.928-5.675-.293-.324-.805-.11-.821.328-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252-.166-.204-.466-.207-.657-.026-.747.707-1.792 1.809-1.792 3.18 0 .93.36 1.905.767 2.69.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z"
      />
    </svg>
  );
};
export default SvgFlame;
