import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorCamera = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5c0 1.414 0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5ZM19 3.75l1.615-.673c.627-.261.94-.392 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166-.222.148-.535.018-1.162-.243L19 6.25v-2.5ZM16 22H8M12 17v5M22 13H2" />
      <path d="M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2" />
    </svg>
  );
};
export default SvgMonitorCamera;
