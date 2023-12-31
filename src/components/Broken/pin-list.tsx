import * as React from "react";
import type { SVGProps } from "react";
const SvgPinList = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M13.632 8.224c1.53 1.53 2.295 2.295 2.294 3.124a2 2 0 0 1-.162.788c-.328.762-1.333 1.162-3.344 1.963l-.145.057c-.57.227-.855.34-1.085.523a2.001 2.001 0 0 0-.444.492c-.158.247-.242.542-.41 1.132-.259.915-.389 1.373-.666 1.576a1 1 0 0 1-.714.186c-.341-.042-.678-.379-1.35-1.051l-3.13-3.13c-.673-.674-1.01-1.01-1.052-1.35a1 1 0 0 1 .186-.715c.203-.277.66-.407 1.576-.667.59-.167.885-.251 1.132-.409.188-.12.354-.27.492-.444.182-.23.296-.515.523-1.085l.057-.145c.8-2.01 1.2-3.016 1.963-3.344a2 2 0 0 1 .788-.162c.362 0 .712.145 1.118.437M3.347 18.142l2.694-2.694M22 8h-5M22 12.5h-4M22 17h-1m-8 0h4"
      />
    </svg>
  );
};
export default SvgPinList;
