import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderPathConnect = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 20a.75.75 0 0 1 .75-.75h8.5V15h1.5v4.25h8.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 20Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 9.8V8.369c0-1.711 0-2.567-.539-3.123-.05-.051-.102-.1-.157-.146-.598-.5-1.52-.5-3.362-.5h-.262c-.808 0-1.211 0-1.588-.1a2.923 2.923 0 0 1-.594-.228c-.341-.177-.627-.442-1.198-.972l-.385-.358a5.869 5.869 0 0 0-.388-.344 2.918 2.918 0 0 0-1.526-.587C8.87 2 8.736 2 8.465 2c-.618 0-.927 0-1.184.045-1.133.199-2.019 1.021-2.232 2.073C5 4.357 5 4.644 5 5.218V9.8c0 2.451 0 3.677.82 4.438C6.64 15 7.96 15 10.6 15h2.8c2.64 0 3.96 0 4.78-.761.82-.762.82-1.988.82-4.439Zm-5.5-3.05a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
        clipRule="evenodd"
      />
      <circle cx={12} cy={20} r={2} fill="currentColor" />
    </svg>
  );
};
export default SvgFolderPathConnect;
