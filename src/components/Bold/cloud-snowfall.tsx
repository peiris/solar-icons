import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudSnowfall = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.001 14.25a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081 1.876 1.083a.75.75 0 1 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.564 18.462a2.25 2.25 0 0 1 2.218-3.841 2.25 2.25 0 0 1 4.437 0 2.25 2.25 0 0 1 2.218 3.841L16 19l.889-.031C19.76 18.671 22 16.27 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765 2 17.104 3.919 19 6.286 19H8l-.436-.538Z"
      />
    </svg>
  );
};
export default SvgCloudSnowfall;
