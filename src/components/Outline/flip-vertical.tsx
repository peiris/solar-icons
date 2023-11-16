import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.826 1.25h12.348c.8 0 1.483 0 1.999.076.525.077 1.128.268 1.44.873.311.606.116 1.207-.127 1.68-.237.463-.635 1.02-1.1 1.67l-1.181 1.655c-.205.287-.387.542-.56.743a2.225 2.225 0 0 1-.673.554c-.277.142-.556.2-.842.225-.264.024-.577.024-.93.024H7.8c-.353 0-.666 0-.93-.024a2.224 2.224 0 0 1-.842-.225 2.224 2.224 0 0 1-.673-.554c-.173-.201-.354-.456-.56-.743L3.65 5.598l-.035-.048c-.465-.651-.863-1.208-1.1-1.671-.243-.473-.439-1.074-.127-1.68.312-.605.915-.796 1.44-.873.516-.076 1.2-.076 2-.076ZM3.702 2.909s.002-.004.01-.01c-.005.007-.01.01-.01.01Zm.027-.02c.04-.02.13-.052.317-.08.392-.057.964-.059 1.84-.059h12.228c.876 0 1.447.002 1.84.06a1.1 1.1 0 0 1 .317.08 1.1 1.1 0 0 1-.12.304c-.18.353-.51.82-1.02 1.533L18 6.307c-.227.32-.37.518-.493.661a.757.757 0 0 1-.223.199.759.759 0 0 1-.29.065 10.23 10.23 0 0 1-.825.018H7.83c-.392 0-.637 0-.825-.018a.759.759 0 0 1-.29-.065.759.759 0 0 1-.223-.199A10.227 10.227 0 0 1 6 6.308l-1.13-1.581c-.51-.714-.84-1.18-1.02-1.533a1.103 1.103 0 0 1-.12-.304Zm16.569.02s-.005-.003-.01-.01c.008.006.01.01.01.01Zm-.025-.039c-.003-.008-.002-.013-.002-.013.001 0 .002.003.002.013Zm-16.546 0c0-.01.001-.014.002-.013l-.002.013ZM1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM7.8 15.25h8.4c.353 0 .666 0 .93.024.286.026.565.083.842.225.277.143.485.337.673.554.173.201.355.456.56.743l1.181 1.655c.465.65.863 1.207 1.1 1.67.243.473.438 1.074.127 1.68-.312.605-.915.796-1.44.873-.516.076-1.2.076-2 .076H5.827c-.8 0-1.483 0-1.999-.076-.525-.077-1.128-.268-1.44-.873-.312-.606-.116-1.207.126-1.68.238-.463.636-1.02 1.1-1.67l1.165-1.63.017-.025c.206-.287.387-.542.56-.742.187-.218.396-.412.673-.555.277-.142.556-.2.842-.225.264-.024.577-.024.93-.024Zm-.795 1.518a.76.76 0 0 0-.29.065.76.76 0 0 0-.223.199c-.123.143-.266.341-.493.66l-1.13 1.581c-.51.714-.84 1.18-1.02 1.533-.087.168-.113.26-.12.304.04.02.13.053.317.08.392.058.964.06 1.84.06h12.228c.876 0 1.447-.002 1.84-.06a1.1 1.1 0 0 0 .317-.08 1.1 1.1 0 0 0-.12-.304c-.18-.353-.51-.82-1.02-1.533L18 17.694c-.227-.32-.37-.518-.493-.661a.758.758 0 0 0-.223-.199.76.76 0 0 0-.29-.065 10.243 10.243 0 0 0-.825-.018H7.83c-.392 0-.637 0-.825.018Zm13.266 4.375.002-.013c0 .01-.001.014-.002.013Zm.017-.043c.005-.006.01-.009.01-.009s-.002.004-.01.01Zm-16.586-.009s.005.003.01.01c-.008-.006-.01-.01-.01-.01Zm.025.039.002.013c-.001 0-.002-.003-.002-.013Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlipVertical;