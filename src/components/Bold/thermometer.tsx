import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => {
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
        d="m5.962 20.174-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.014 2.014 0 0 0 .578-1.647l-.09-.799a3.021 3.021 0 0 1 .867-2.47l8.943-8.942a4.028 4.028 0 1 1 5.696 5.696l-.893.894-1.301-1.3a.75.75 0 1 0-1.06 1.06l1.3 1.3-2.139 2.14-1.3-1.3a.75.75 0 0 0-1.061 1.06l1.3 1.3-2.148 2.149-1.3-1.3a.75.75 0 1 0-1.061 1.06l1.3 1.3-.58.58a3.02 3.02 0 0 1-2.469.866l-.8-.089a2.014 2.014 0 0 0-1.646.578ZM16.03 9.03a.75.75 0 0 0-1.06-1.06l-6.5 6.5a.75.75 0 1 0 1.06 1.06l6.5-6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThermometer;
