import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.003 6.507a.75.75 0 0 1-.072 1.058L9 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.493-1.315l3.437-3a.75.75 0 0 1 1.059.072ZM17.702 13.737A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3a.75.75 0 0 0 .21-.828Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundTransferHorizontal;
