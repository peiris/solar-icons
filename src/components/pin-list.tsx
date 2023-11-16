import * as React from "react";
import type { SVGProps } from "react";
const SvgPinList = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m13.632 8.224-.367-.367c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 0 0-.788.162c-.762.328-1.162 1.333-1.962 3.344l-.058.145c-.227.57-.34.855-.523 1.085a2 2 0 0 1-.492.444c-.247.158-.542.242-1.132.41-.915.259-1.373.389-1.576.666a1 1 0 0 0-.186.714c.043.341.379.678 1.052 1.35l3.13 3.13c.673.673 1.009 1.01 1.35 1.052a1 1 0 0 0 .715-.186c.277-.203.406-.66.666-1.576.168-.59.251-.885.41-1.132a2 2 0 0 1 .443-.492c.23-.182.515-.296 1.085-.523l.146-.058c2.01-.8 3.015-1.2 3.343-1.962a2 2 0 0 0 .162-.788c0-.83-.764-1.594-2.294-3.124ZM3.347 18.142l2.694-2.694M22 8h-5M22 12.5h-4M22 17h-9" />
    </svg>
  );
};
export default SvgPinList;
