import * as React from "react";
import type { SVGProps } from "react";
const SvgHashtagChat = (props: SVGProps<SVGSVGElement>) => {
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
        d="m17.814 21.236-.27.458a.635.635 0 0 1-1.087 0l-.271-.458c-.21-.355-.316-.533-.485-.631-.168-.098-.381-.102-.806-.11-.628-.01-1.022-.049-1.352-.185a2.5 2.5 0 0 1-1.353-1.353c-.19-.46-.19-1.042-.19-2.207v-.5c0-1.637 0-2.455.368-3.056a2.5 2.5 0 0 1 .826-.826c.6-.368 1.42-.368 3.056-.368h1.5c1.637 0 2.455 0 3.056.368a2.5 2.5 0 0 1 .826.826c.368.6.368 1.42.368 3.056v.5c0 1.165 0 1.747-.19 2.207a2.5 2.5 0 0 1-1.353 1.353c-.33.136-.724.175-1.352.186-.425.007-.638.01-.806.109-.17.098-.274.276-.485.63Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.2 2.277c.4.111.634.525.523.924L9.32 8.25h7.443l1.514-5.45a.75.75 0 1 1 1.446.4L18.32 8.25H22a.75.75 0 0 1 0 1.5h-4.098a.75.75 0 0 1-1.415 0H8.903l-1.527 5.5H9a.75.75 0 0 1 0 1.5H6.959L5.723 21.2a.75.75 0 0 1-1.446-.4l1.125-4.05H2a.75.75 0 1 1 0-1.5h3.819l1.528-5.5H4a.75.75 0 0 1 0-1.5h3.763L9.277 2.8a.75.75 0 0 1 .924-.523Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHashtagChat;
