import * as React from "react";
import type { SVGProps } from "react";
const SvgChandelier = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 4.75V16.5a2.75 2.75 0 1 1-5.5 0v-.594h-1.5v.594A4.25 4.25 0 0 0 12 18.912a4.25 4.25 0 0 0 7.75-2.412v-.594h-1.5v.594a2.75 2.75 0 1 1-5.5 0V4.75h-1.5Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM16 13c0 1.398.956 2.573 2.25 2.906h1.5A3.001 3.001 0 0 0 22 13v-1.8a1.2 1.2 0 0 0-1.2-1.2h-3.6a1.2 1.2 0 0 0-1.2 1.2V13ZM2 13c0 1.398.956 2.573 2.25 2.906h1.5A3.001 3.001 0 0 0 8 13v-2.143A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13Z"
      />
    </svg>
  );
};
export default SvgChandelier;
