import * as React from "react";
import type { SVGProps } from "react";
const SvgUsbCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.53 6.47-1-1a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 .78 1.237v5.035a2.448 2.448 0 0 0-.22-.08l-1.403-.44a1.25 1.25 0 0 1-.877-1.192v-.448a1.75 1.75 0 1 0-1.5 0v.448a2.75 2.75 0 0 0 1.93 2.624l1.403.439a.95.95 0 0 1 .667.907v.418a1.75 1.75 0 1 0 1.645.078.95.95 0 0 1 .522-.403l1.403-.439a2.75 2.75 0 0 0 1.93-2.624v-.322c.2-.039.433-.123.634-.324.236-.236.311-.516.341-.735.025-.188.025-.41.025-.614v-.07c0-.205 0-.426-.025-.614-.03-.219-.105-.5-.341-.735a1.239 1.239 0 0 0-.735-.341c-.188-.025-.41-.025-.615-.025h-.068c-.206 0-.427 0-.615.025-.219.03-.5.105-.735.341a1.239 1.239 0 0 0-.341.735 4.844 4.844 0 0 0-.025.615v.068c0 .206 0 .427.025.615.03.219.105.5.341.735.2.2.434.285.634.324v.322a1.25 1.25 0 0 1-.877 1.193l-1.404.438c-.074.024-.148.05-.219.08V7.708a.75.75 0 0 0 .78-1.237Zm2.719 3.779L16 10.25l-.249-.001L15.75 10l.001-.249a16.28 16.28 0 0 1 .498 0l.001.249-.001.249ZM12 16.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM8.25 9a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUsbCircle;
