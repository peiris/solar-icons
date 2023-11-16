import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardOpen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 11h12c1.886 0 2.828 0 3.414.586C20 12.172 20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m13.318 8.2.6-5.034-4.71 1.262-.042.285-.604 5.064 4.719-1.264.037-.313ZM3.483 7.515c-.208.776.034 1.68.518 3.485L7 10.196l.039-.314.6-5.034-.103.028c-1.805.484-2.708.726-3.276 1.294a3 3 0 0 0-.777 1.345ZM18.248 7.182l-3.407.913.604-5.065.055-.272a2.62 2.62 0 0 1 .344-.048 3 3 0 0 1 2.887 1.666c.13.265.22.602.401 1.275.06.225.09.337.097.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134Z"
      />
    </svg>
  );
};
export default SvgClapperboardOpen;
