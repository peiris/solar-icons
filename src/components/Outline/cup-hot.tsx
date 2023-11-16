import * as React from "react";
import type { SVGProps } from "react";
const SvgCupHot = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.305-2.007l.41-.575a.75.75 0 0 1 1.046-.175Zm4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175Zm4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175ZM7.221 6.25h5.557c.956 0 1.75 0 2.377.086.66.091 1.253.291 1.715.785.31.331.484.713.58 1.129H18a4.75 4.75 0 0 1 0 9.5h-.97l-.03.368v.632h-.064c-.037.32-.08.614-.134.884-.169.845-.455 1.55-1.047 2.104-.591.554-1.315.793-2.17.904-.822.108-1.86.108-3.146.108H9.56c-1.285 0-2.324 0-3.146-.108-.854-.111-1.578-.35-2.17-.904-.591-.553-.877-1.26-1.046-2.104-.162-.814-.23-1.85-.316-3.133l-.35-5.239c-.063-.954-.116-1.746-.072-2.377.047-.664.207-1.27.67-1.764.462-.494 1.055-.694 1.715-.785.626-.086 1.42-.086 2.376-.086Zm9.914 10H18a3.25 3.25 0 0 0 0-6.5h-.45a40.87 40.87 0 0 1-.083 1.512l-.332 4.988Zm-1.572 1H4.436c-.02-.278-.04-.578-.061-.9l-.342-5.134c-.068-1.021-.113-1.71-.076-2.226.034-.493.137-.704.268-.844.13-.14.334-.256.825-.324.511-.07 1.202-.072 2.225-.072h5.45c1.023 0 1.713.002 2.225.072.49.068.694.184.825.324.13.14.233.35.268.844.037.516-.008 1.205-.076 2.226l-.342 5.133-.062.9Zm-10.988 1.5h10.85c-.028.214-.059.41-.095.59-.136.685-.326 1.047-.6 1.303-.273.256-.647.422-1.34.512-.713.093-1.653.095-3.003.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.303a8.826 8.826 0 0 1-.094-.59Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCupHot;