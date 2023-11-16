import * as React from "react";
import type { SVGProps } from "react";
const SvgBroom = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22.53 2.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM3.19 12.63l.64-.39-.64.39Zm-.741-1.219-.668.341.012.025.015.024.64-.39ZM4.11 5.997l.35.663-.35-.663Zm3.069-1.279.206.721-.206-.721Zm5.963-.575.53-.53-.184-.184-.257-.031-.09.745ZM11.37 20.81l.39-.64-.39.64Zm1.219.742-.39.64.024.015.025.012.34-.668Zm5.414-1.662-.663-.35.663.35Zm1.279-3.069.721.206-.721-.206Zm.575-5.963.745-.089-.03-.257-.184-.184-.53.53ZM21.47 1.47l-2.358 2.357 1.06 1.06L22.53 2.53l-1.06-1.06Zm-7.583 3.418a3.695 3.695 0 0 1 5.225 0l1.06-1.06a5.195 5.195 0 0 0-7.346 0l1.06 1.06Zm5.225 0a3.695 3.695 0 0 1 0 5.226l1.061 1.06a5.195 5.195 0 0 0 0-7.347l-1.06 1.06ZM3.83 12.24l-.74-1.219-1.282.78.74 1.218 1.282-.78Zm.63-5.58c.922-.486 1.935-.938 2.925-1.22l-.412-1.443c-1.124.321-2.237.822-3.213 1.337l.7 1.326Zm2.925-1.22a16.334 16.334 0 0 1 5.564-.563 5.382 5.382 0 0 1 .1.01h.004l.088-.744.09-.745h-.005l-.009-.002a4.528 4.528 0 0 0-.135-.013 16.715 16.715 0 0 0-1.751-.043 17.76 17.76 0 0 0-4.358.657l.412 1.442Zm-4.268 5.63c-.799-1.563-.273-3.556 1.343-4.41l-.7-1.326C1.36 6.6.64 9.519 1.78 11.752l1.337-.682Zm7.863 10.381 1.219.741.78-1.281-1.219-.742-.78 1.282Zm7.686-1.21c.515-.976 1.016-2.09 1.337-3.214l-1.442-.412c-.283.99-.735 2.003-1.221 2.925l1.326.7Zm1.337-3.214a17.829 17.829 0 0 0 .614-6.11 6.742 6.742 0 0 0-.01-.105l-.003-.03-.002-.008v-.004l-.745.088-.744.09v-.001.003a4.48 4.48 0 0 1 .01.1 15.199 15.199 0 0 1 .038 1.576 16.333 16.333 0 0 1-.6 3.989l1.442.412Zm-7.755 5.192c2.233 1.14 5.15.421 6.418-1.979l-1.326-.7c-.854 1.616-2.847 2.142-4.41 1.344l-.682 1.335Zm.363-17.546 6.716 6.716 1.06-1.06-6.715-6.717-1.06 1.061ZM2.55 13.019a25.198 25.198 0 0 0 8.432 8.432l.78-1.282a23.697 23.697 0 0 1-7.93-7.93l-1.282.78Z" />
    </svg>
  );
};
export default SvgBroom;
