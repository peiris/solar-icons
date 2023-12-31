import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75ZM12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75ZM9.1 2.398a.75.75 0 0 1-.43.97 9.187 9.187 0 0 0-.42.173.75.75 0 1 1-.608-1.37c.16-.072.323-.14.488-.203a.75.75 0 0 1 .97.43ZM5.648 4.24a.75.75 0 0 1-.026 1.06 9.31 9.31 0 0 0-.321.322.75.75 0 1 1-1.087-1.035c.122-.127.246-.251.373-.373a.75.75 0 0 1 1.06.026ZM3.16 7.261a.75.75 0 0 1 .381.99c-.061.138-.12.278-.174.419a.75.75 0 0 1-1.399-.54c.063-.165.13-.327.202-.488a.75.75 0 0 1 .99-.381Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHistory2;
