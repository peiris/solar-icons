import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartPulse = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21c1.04 0 1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26 22 3.35 16.5.663 12 5.5 7.5.663 2 3.349 2 9.26Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10.093 10.747c.09-.128.164-.235.23-.325.056.097.119.21.194.348l1.71 3.109c.166.302.33.598.493.813.175.23.482.546.975.555.493.01.813-.294.996-.518.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.764.113-.154.179-.204.228-.231.049-.028.125-.058.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.222 2.222 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.764-.17-.224-.462-.52-.93-.545-.467-.025-.789.237-.982.442-.177.186-.36.448-.543.71l-.31.442c-.227.324-.37.526-.493.672-.113.134-.176.178-.223.203-.046.024-.118.05-.293.066-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.026.571-.085.85-.23.28-.145.489-.343.676-.564.173-.205.354-.464.559-.757l.3-.428Z"
      />
    </svg>
  );
};
export default SvgHeartPulse;
