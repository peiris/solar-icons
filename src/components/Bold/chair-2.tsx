import * as React from "react";
import type { SVGProps } from "react";
const SvgChair2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.572 3.062c-.582.687-.702 1.692-.944 3.704l-.09.757c-.251 2.088-.376 3.132.22 3.804.597.673 1.648.673 3.75.673h.742v1.75H7c-.321 0-.622.086-.88.237l-.28-.837a4.692 4.692 0 0 0-.205-.543 3.078 3.078 0 0 0-.198-.371c-.285-.469-.656-.876-1.258-1.14-.566-.25-1.274-.346-2.179-.346a.75.75 0 0 0 0 1.5c.827 0 1.29.092 1.574.218.249.11.41.265.581.547.03.05.043.071.056.096.013.024.031.058.063.127.05.11.075.18.15.404l.864 2.595a.748.748 0 0 0 .147.256A2.751 2.751 0 0 0 8 18.25h3.25v1.166a3.63 3.63 0 0 0-2.462 2.347.75.75 0 0 0 1.423.474 2.13 2.13 0 0 1 1.039-1.216V22a.75.75 0 0 0 1.5 0v-.98a2.13 2.13 0 0 1 1.039 1.217.75.75 0 0 0 1.422-.474 3.63 3.63 0 0 0-2.461-2.347V18.25H16a2.751 2.751 0 0 0 2.565-1.757.747.747 0 0 0 .146-.256l.866-2.595c.074-.224.098-.295.15-.404a2.24 2.24 0 0 1 .118-.223c.172-.282.332-.437.581-.547.285-.126.747-.218 1.574-.218a.75.75 0 0 0 0-1.5c-.905 0-1.613.095-2.18.345-.6.265-.972.672-1.257 1.14a3.078 3.078 0 0 0-.198.372 4.685 4.685 0 0 0-.206.543l-.279.837a1.742 1.742 0 0 0-.88-.237h-4.25V12h.741c2.103 0 3.154 0 3.75-.673.598-.672.472-1.716.222-3.804l-.091-.757c-.241-2.012-.362-3.017-.944-3.704a3 3 0 0 0-.638-.566C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566Z"
      />
    </svg>
  );
};
export default SvgChair2;