import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53ZM14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642.384.504.654 1.036.654 1.68 0 .644-.27 1.176-.654 1.68-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528.283-.37.347-.586.347-.77 0-.184-.064-.4-.347-.77-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06ZM7.97 8.47a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528-.283.37-.346.586-.346.77 0 .184.063.4.346.77.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642-.384-.504-.653-1.036-.653-1.68 0-.644.27-1.176.653-1.68.364-.477.894-1.007 1.53-1.642l.208-.208Z"
      />
    </svg>
  );
};
export default SvgCodeCircle;
