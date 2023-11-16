import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintRoller = (props: SVGProps<SVGSVGElement>) => {
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
        d="m6.75 6.799-.375.65.375-.65Zm-.549-.549-.65.375.65-.375Zm11.598 0 .65.375-.65-.375Zm-.549.549.375.65-.375-.65Zm0-4.598.375-.65-.375.65Zm.549.549.65-.375-.65.375ZM6.75 2.201l-.375-.65.375.65Zm-.549.549-.65-.375.65.375Zm7.506 18.957-.53-.53.53.53Zm0-7.414-.53.53.53-.53Zm-3.414 0-.53-.53.53.53Zm0 7.414.53-.53-.53.53Zm5.225-9.976a.75.75 0 1 0-.223-1.484l.223 1.484Zm3.854-2.095a.75.75 0 1 0 .223 1.483l-.223-1.483Zm2.489-3.869.698-.274-.698.274ZM20.733 4.64l-.275.698.275-.698Zm.205 5.405-.351-.663.351.663Zm.948-1.1.707.25-.707-.25Zm-9.401 2.973-.569-.49.569.49ZM12.005 14v.75h.737l.013-.738-.75-.012ZM5.5 3.75a.75.75 0 0 0 0 1.5v-1.5Zm4.5-1a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm1.5 5h-7v1.5h7v-1.5Zm-7 0c-.481 0-.792 0-1.027-.022-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273.32.029.71.028 1.163.028v-1.5ZM5.25 4.5c0 .454 0 .844.028 1.163.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A12.807 12.807 0 0 1 6.75 4.5h-1.5Zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824l.75-1.3ZM17.25 4.5c0 .481 0 .792-.022 1.027-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962.029-.32.028-.71.028-1.163h-1.5ZM15.5 7.75c.454 0 .844 0 1.163-.028.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a12.81 12.81 0 0 1-1.027.022v1.5Zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824l-1.3-.75ZM15.5 2.75c.481 0 .792 0 1.027.022.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273-.32-.029-.71-.028-1.163-.028v1.5Zm3.25 1.75c0-.454 0-.844-.028-1.163-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348.021.235.022.546.022 1.027h1.5Zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824l-.75 1.3ZM8.5 1.25c-.454 0-.844 0-1.163.028-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079.235-.021.546-.022 1.027-.022v-1.5ZM6.75 4.5c0-.481 0-.792.022-1.027.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962-.029.32-.028.71-.028 1.163h1.5Zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275l-.75-1.299ZM10.75 20v-4h-1.5v4h1.5Zm2.5-4v4h1.5v-4h-1.5Zm0 4c0 .493-.002.787-.03.997a.702.702 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04.045-.334.043-.747.043-1.197h-1.5ZM12 22.75c.45 0 .863.002 1.197-.043.356-.048.731-.16 1.04-.47l-1.06-1.06-.003.001a.702.702 0 0 1-.177.042c-.21.028-.504.03-.997.03v1.5Zm0-8c.493 0 .787.002.997.03a.702.702 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47-.334-.045-.747-.043-1.197-.043v1.5ZM14.75 16c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.702.702 0 0 1 .042.177c.028.21.03.504.03.997h1.5Zm-4 0c0-.493.002-.787.03-.997a.702.702 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5ZM12 13.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.702.702 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5ZM9.25 20c0 .45-.002.863.043 1.197.048.356.16.731.47 1.04l1.06-1.06-.001-.003a.702.702 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997h-1.5ZM12 21.25c-.493 0-.787-.002-.997-.03a.702.702 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47.334.045.747.043 1.197.043v-1.5Zm7.045-17.5H18v1.5h1.045v-1.5Zm3.705 3.705c0-.435 0-.797-.019-1.094a2.825 2.825 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416.016.236.016.541.016.996h1.5ZM19.045 5.25c.455 0 .76 0 .996.016.23.015.343.042.417.07l.55-1.395a2.826 2.826 0 0 0-.87-.172c-.296-.02-.658-.019-1.093-.019v1.5Zm3.514.243a2.75 2.75 0 0 0-1.552-1.552l-.55 1.396c.324.127.58.382.706.705l1.396-.55Zm-2.965 5.626c.71-.106 1.252-.177 1.696-.413l-.703-1.325c-.162.086-.387.13-1.215.255l.223 1.483Zm1.656-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739h-1.5Zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688l.703 1.325Zm-5.995-.459c-.793.12-1.457.218-1.98.365-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351.41-.116.965-.2 1.797-.325l-.223-1.484Zm-2.54 3.765c.017-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56l1.5.025ZM12 14.75h.005v-1.5H12v1.5Zm-6-11h-.5v1.5H6v-1.5Zm2.5-1H10v-1.5H8.5v1.5Zm5.5 0h1.5v-1.5H14v1.5Z"
      />
    </svg>
  );
};
export default SvgPaintRoller;