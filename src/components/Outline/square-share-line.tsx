import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareShareLine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.752 1.994a.75.75 0 0 1-.744.756c-1.71.014-2.97.07-3.945.261-.955.187-1.583.494-2.068.979-.57.57-.897 1.34-1.069 2.62-.174 1.3-.176 3.009-.176 5.387 0 2.38.002 4.088.176 5.388.172 1.279.5 2.05 1.07 2.62.569.57 1.34.897 2.619 1.069 1.3.174 3.009.176 5.388.176 2.378 0 4.087-.002 5.387-.176 1.28-.172 2.05-.5 2.62-1.07.485-.484.792-1.112.979-2.067.19-.976.246-2.236.261-3.945a.75.75 0 0 1 1.5.012c-.015 1.705-.068 3.093-.29 4.222-.224 1.15-.633 2.083-1.39 2.84-.894.895-2.035 1.3-3.48 1.494-1.412.19-3.221.19-5.53.19h-.115c-2.309 0-4.118 0-5.53-.19-1.445-.194-2.585-.6-3.48-1.494-.895-.895-1.3-2.036-1.495-3.48-.19-1.413-.19-3.222-.19-5.531v-.115c0-2.309 0-4.118.19-5.53.194-1.445.6-2.586 1.495-3.48.756-.757 1.69-1.166 2.84-1.39 1.128-.222 2.516-.276 4.22-.29a.75.75 0 0 1 .757.744Zm5.718-.524a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.192.192-.19.19c-.323.32-1.08 1.236-1.08 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.19.188-.188C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareShareLine;
