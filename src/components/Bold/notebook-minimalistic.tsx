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
        d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923.977.06 2.131.179 3.018.412 1.05.277 2.296.867 3.282 1.388.307.163.634.275.968.339v15.179a3.44 3.44 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143ZM12.75 20.393a3.44 3.44 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315a3.51 3.51 0 0 1-.924.37v15.22Z"
      />
    </svg>
  );
};
export default SvgNotebookMinimalistic;
