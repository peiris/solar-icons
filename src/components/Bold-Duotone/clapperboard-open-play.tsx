import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardOpenPlay = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 11H4v5c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-1c0-1.886 0-2.828-.586-3.414C18.828 11 17.886 11 16 11Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14 16.5c0-.422-.397-.707-1.192-1.277-.805-.577-1.207-.866-1.508-.654-.3.212-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654.795-.569 1.192-.854 1.192-1.276ZM13.318 8.2l.6-5.034-4.71 1.262-.042.285-.604 5.064 4.719-1.264.037-.313ZM3.483 7.515c-.208.776.034 1.68.518 3.485L7 10.196l.039-.314.6-5.034-.103.028c-1.805.484-2.708.726-3.276 1.294a3 3 0 0 0-.777 1.345ZM18.248 7.182l-3.407.913.604-5.065.055-.272a2.62 2.62 0 0 1 .344-.048 3 3 0 0 1 2.887 1.666c.13.265.22.602.401 1.275.06.225.09.337.097.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134Z"
      />
    </svg>
  );
};
export default SvgClapperboardOpenPlay;
