import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinity = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284.362-.176.679-.442.986-.816.54-.66.983-1.558 1.567-2.741.117-.237.24-.485.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075.41-.501.89-.923 1.49-1.215.6-.292 1.28-.435 2.063-.435a5.75 5.75 0 1 1-3.45 10.35.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284-.362.176-.679.442-.986.816-.54.66-.983 1.558-1.567 2.741-.117.237-.24.485-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076-.41.5-.89.922-1.49 1.214-.6.292-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.228 4.228 0 0 0 7 7.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgInfinity;
