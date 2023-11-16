import * as React from "react";
import type { SVGProps } from "react";
const SvgEndCall = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 12.862v.617c0 .852-.577 1.604-1.42 1.85l-2 .587C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353C3.174 9.905 4.88 8.282 8 7.478v5.384Zm8 0v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.729 2.3-1.913V11.42c0-.587-.184-1.165-.63-1.563-.817-.73-2.492-1.88-5.37-2.474v5.48Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 11.396c4 0 4 1.466 4 1.466v-5.48C14.862 7.147 13.536 7 12 7s-2.862.184-4 .478v5.384s0-1.466 4-1.466Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgEndCall;
