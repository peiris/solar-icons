import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudStorage = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882 0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Zm-1.025 10.5h1.098c.665 0 1.238 0 1.697.062.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v2.098c0 .665 0 1.238-.062 1.697-.066.492-.215.963-.597 1.345s-.853.531-1.345.597c-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-2.098c0-.665 0-1.238.062-1.697.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062Zm-1.497 1.548c-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546v2c0 .728.002 1.2.048 1.546.044.325.115.427.172.484.057.057.159.128.484.172.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048.325-.044.427-.115.484-.172.057-.057.128-.159.172-.484.046-.347.048-.818.048-1.546v-2c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048ZM10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloudStorage;