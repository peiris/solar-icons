import * as React from "react";
import type { SVGProps } from "react";
const SvgVinylRecord = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.54 5.46A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46ZM4.4 4.398C8.597.2 15.403.2 19.6 4.399c4.198 4.198 4.198 11.004 0 15.202S8.597 23.8 4.4 19.601C.2 15.403.2 8.597 4.399 4.4Zm3.535 2.474a.75.75 0 0 1 0 1.061 5.75 5.75 0 0 0 0 8.132.75.75 0 1 1-1.06 1.06 7.25 7.25 0 0 1 0-10.253.75.75 0 0 1 1.06 0Zm8.132 0a.75.75 0 0 1 1.06 0 7.25 7.25 0 0 1 0 10.253.75.75 0 1 1-1.06-1.06 5.75 5.75 0 0 0 0-8.132.75.75 0 0 1 0-1.06ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVinylRecord;
