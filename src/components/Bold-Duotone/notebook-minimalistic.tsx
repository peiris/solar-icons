import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebookMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923.977.06 2.131.179 3.018.413 1.05.276 2.296.866 3.282 1.388A3.478 3.478 0 0 0 12 5.275v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.532-2.29-1.15-3.372-1.435-.877-.232-2.016-.35-2.985-.411C2.906 18.153 2 17.255 2 16.143Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="#1C274D"
        d="M22 16.144V4.934c0-1.073-.846-1.953-1.918-1.916-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315A3.529 3.529 0 0 1 12 5.275v15.2c.56 0 1.121-.136 1.628-.406 1-.532 2.29-1.15 3.372-1.435.877-.232 2.016-.35 2.985-.411 1.109-.07 2.015-.968 2.015-2.08Z"
      />
    </svg>
  );
};
export default SvgNotebookMinimalistic;
