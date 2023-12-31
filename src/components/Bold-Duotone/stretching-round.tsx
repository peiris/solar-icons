import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.507 14.464c2.217-.357 4.243 1.34 4.243 3.585v3.947a.75.75 0 0 1-1.5 0v-3.947c0-1.307-1.184-2.317-2.504-2.104a.75.75 0 0 1-.239-1.481Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.363 10.346c.475.748.732 1.765.732 3.089 0 5.082-3.961 9.315-9.095 9.315a.75.75 0 0 1 0-1.5c4.255 0 7.595-3.51 7.595-7.815 0-1.144-.224-1.852-.498-2.285a1.613 1.613 0 0 0-.981-.728c-.39-.104-.83-.087-1.237.003-.416.09-.727.24-.852.33-.32.226-.646.654-.781 1.102-.128.424-.065.76.198 1.015l.025.024a.75.75 0 1 1-1.042 1.078l-.025-.024c-.778-.752-.833-1.729-.593-2.526A3.727 3.727 0 0 1 8.16 9.53c.329-.233.839-.449 1.399-.572.568-.124 1.26-.169 1.944.014a3.11 3.11 0 0 1 1.861 1.373Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgStretchingRound;
