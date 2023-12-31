import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.445 3.25h5.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v4.323c.848.121 1.5.85 1.5 1.732v1A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17v-1a1.75 1.75 0 0 1 1.5-1.732V9.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM3 15.75a.25.25 0 0 0-.25.25v1A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17v-1a.25.25 0 0 0-.25-.25h-4.333c-.27 0-.534.088-.75.25l-.934.7a2.75 2.75 0 0 1-1.65.55h-2.666a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25H3Zm16.75-1.5h-3.083a2.75 2.75 0 0 0-1.65.55l-.934.7a1.25 1.25 0 0 1-.75.25h-2.666a1.25 1.25 0 0 1-.75-.25l-.934-.7a2.75 2.75 0 0 0-1.65-.55H4.25V10c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h5c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v4.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLaptop2;
