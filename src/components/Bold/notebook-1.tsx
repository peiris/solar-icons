import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebook1 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9l-.25.013Zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75ZM3 7.25c.008-2.336.081-3.574.879-4.371.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3Zm0 0H2a.75.75 0 0 0 0 1.5h1v-1.5Zm0 5.5H2a.75.75 0 0 1 0-1.5h1v1.5Zm0 2.5H2a.75.75 0 0 0 0 1.5h1v-1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgNotebook1;
