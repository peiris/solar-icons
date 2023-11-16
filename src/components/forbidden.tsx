import * as React from "react";
import type { SVGProps } from "react";
const SvgForbidden = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m18.5 5.5-13 13M22 10.849v2.302c0 1.226 0 1.84-.228 2.39-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852C2 14.99 2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529C9.01 2 9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852.228.552.228 1.165.228 2.39Z" />
    </svg>
  );
};
export default SvgForbidden;