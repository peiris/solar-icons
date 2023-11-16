import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => {
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
        d="m10.09 11.963 9.274-3.332v5.54a3.825 3.825 0 0 0-1.91-.501c-1.958 0-3.545 1.426-3.545 3.185 0 1.759 1.587 3.185 3.545 3.185 1.959 0 3.546-1.426 3.546-3.185V7.492c0-1.12 0-2.059-.088-2.807a6.724 6.724 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.244 2.244 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224-.864.198-1.936.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.547.63-.435.216-.81.471-1.092.851-.281.38-.398.79-.452 1.234-.05.418-.05.926-.05 1.525v7.794a3.825 3.825 0 0 0-1.91-.501C4.587 15.63 3 17.056 3 18.815 3 20.574 4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185v-6.852Z"
      />
    </svg>
  );
};
export default SvgMusicNote;