import * as React from "react";
import type { SVGProps } from "react";
const SvgPallete2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75c-5.107 0-9.25 4.151-9.25 9.276 0 4.762 3.579 8.685 8.183 9.215.462.053.957-.14 1.353-.537a.93.93 0 0 0 0-1.314c-.312-.312-.625-.73-.796-1.203-.175-.485-.219-1.094.137-1.66.323-.513.807-.788 1.315-.922.49-.128 1.031-.136 1.552-.104a22.896 22.896 0 0 1 1.638.179c.557.072 1.1.139 1.626.164 1.074.051 1.902-.084 2.467-.546.542-.443 1.025-1.341 1.025-3.272 0-5.125-4.143-9.276-9.25-9.276ZM1.25 12.026C1.25 6.076 6.061 1.25 12 1.25s10.75 4.826 10.75 10.776c0 2.145-.537 3.584-1.575 4.433-1.014.829-2.326.939-3.489.883a21.917 21.917 0 0 1-1.862-.19c-.52-.067-.99-.128-1.42-.154-.467-.028-.821-.01-1.08.058-.24.063-.356.157-.427.27-.039.062-.066.158.004.351.074.206.236.442.447.654a2.43 2.43 0 0 1 0 3.432c-.65.652-1.58 1.084-2.587.968-5.355-.616-9.511-5.175-9.511-10.705ZM9.585 6.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.335 7a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm7.165-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12.25 7a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.5 10.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm13.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPallete2;