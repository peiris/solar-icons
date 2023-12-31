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
        fillRule="evenodd"
        d="M14.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM11.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm2.113 5.846c.475.748.732 1.764.732 3.088 0 5.083-3.961 9.316-9.095 9.316a.75.75 0 0 1 0-1.5c4.255 0 7.595-3.51 7.595-7.816 0-1.143-.224-1.852-.498-2.284a1.613 1.613 0 0 0-.981-.728c-.39-.104-.83-.087-1.237.002-.416.092-.727.242-.852.33-.32.227-.646.654-.781 1.103-.128.424-.065.76.198 1.014l.025.024a.75.75 0 1 1-1.042 1.079l-.025-.024c-.778-.752-.833-1.73-.593-2.527A3.727 3.727 0 0 1 8.16 9.53c.329-.232.839-.448 1.399-.57.568-.125 1.26-.17 1.944.012a3.11 3.11 0 0 1 1.861 1.374Zm2.144 4.118c2.217-.357 4.243 1.34 4.243 3.585v3.947a.75.75 0 0 1-1.5 0v-3.947c0-1.307-1.184-2.317-2.504-2.104a.75.75 0 0 1-.239-1.481Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStretchingRound;
