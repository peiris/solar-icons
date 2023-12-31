import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStation = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.75 2h-1c-2.828 0-4.243 0-5.121.879C2.75 3.757 2.75 5.172 2.75 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C13.993 2 12.578 2 9.75 2Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M2.75 21.25h-1a.75.75 0 0 0 0 1.5h15.123a.75.75 0 0 0 0-1.5H2.75ZM8 6h3c.943 0 1.414 0 1.707.293C13 6.586 13 7.057 13 8c0 .943 0 1.414-.293 1.707C12.414 10 11.943 10 11 10H8c-.943 0-1.414 0-1.707-.293C6 9.414 6 8.943 6 8c0-.943 0-1.414.293-1.707C6.586 6 7.057 6 8 6ZM7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H7ZM15.75 17.75h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582c-.08-.07-.164-.138-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195.443.397.711.954.745 1.549a6.1 6.1 0 0 1 .003.306V8h-.75a1.5 1.5 0 0 0-1.5 1.5v2.419a1.5 1.5 0 0 0 1.026 1.423L21 13.75v4.75a.75.75 0 0 1-1.5 0v-.071a2.179 2.179 0 0 0-2.179-2.179H15.75v1.5Z"
      />
    </svg>
  );
};
export default SvgGasStation;
