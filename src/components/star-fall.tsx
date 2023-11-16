import * as React from "react";
import type { SVGProps } from "react";
const SvgStarFall = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m9.963 5.72.278.696-.278-.697Zm1.087-1.133.704.26-.704-.26ZM9.115 9.26l.484-.573-.484.573Zm.495-3.4-.279-.696.279.696Zm.515 5.084-.749.046.749-.046ZM9.41 9.51l-.484.573.484-.573Zm.58.6-.67.334.67-.334Zm3.128 2.804.416.624-.416-.624Zm-2.97-1.576.748-.046-.748.046Zm4.817 1.119.2-.723-.2.723Zm-1.53.245-.415-.624.416.624Zm4.228-2.568.726-.19-.726.19Zm-2.33 2.425-.2.723.2-.723Zm2.462-4.393-.639-.393.639.393Zm-.231 1.587-.726.19.726-.19ZM16.469 4.76l-.047.748.047-.748ZM18 7.835l.639.393L18 7.835Zm-3.295-3.833.588-.466-.588.466Zm1.386.735.047-.748-.047.748ZM14.46 3.696l-.588.465.588-.465Zm-3.276.525-.704-.26.704.26ZM7.89 7.846a.75.75 0 1 0-.885-1.21l.885 1.21ZM4.25 18l-.741.118a.75.75 0 0 0 1.45.123L4.249 18Zm6.282-4.561a.75.75 0 0 0-.48-1.422l.48 1.422Zm3.342-9.278.243.306 1.176-.93-.243-.307-1.176.931Zm2.17 1.325.38.023.093-1.497-.38-.023-.093 1.497Zm1.317 1.956-.203.33 1.277.787.204-.33-1.278-.787Zm-.52 2.5.099.38 1.451-.379-.1-.381-1.45.38Zm-1.306 1.893-.368-.102-.4 1.446.367.102.401-1.446Zm-2.513.242-.318.212.832 1.248.318-.212-.832-1.248Zm-2.124-.786-.024-.393-1.497.092.024.393 1.497-.092ZM9.895 8.937l-.296-.25-.968 1.145.296.25.968-1.145Zm-.007-2.38.353-.141-.557-1.393-.353.14.557 1.394Zm1.866-1.71.135-.367-1.408-.518-.134.366 1.407.518Zm-1.513 1.569c.327-.13.706-.266.986-.557l-1.082-1.04c.009-.008.005.002-.063.036a5.96 5.96 0 0 1-.398.168l.557 1.393Zm.106-2.088a7.286 7.286 0 0 1-.162.417c-.035.075-.047.082-.04.074l1.082 1.04c.277-.288.402-.673.527-1.013l-1.407-.518Zm-.748 4.358c-.591-.5-.968-.82-1.199-1.082a.992.992 0 0 1-.17-.239c-.007-.016-.008-.022-.007-.02v.006l-1.484-.216c-.09.61.21 1.091.536 1.462.321.363.802.767 1.356 1.235l.968-1.146ZM9.33 5.164c-.658.263-1.234.49-1.647.734-.425.25-.855.62-.945 1.237l1.484.216s0 .005-.003.01l.007-.009a.888.888 0 0 1 .218-.162c.29-.17.737-.351 1.443-.633L9.33 5.164Zm1.542 5.734c-.022-.369-.033-.768-.21-1.123l-1.343.668.005.015a.45.45 0 0 1 .015.08c.014.096.022.225.036.452l1.497-.092Zm-1.946-.816c.17.145.266.226.333.293.03.03.045.047.053.057l.007.011 1.343-.668c-.178-.358-.49-.604-.768-.838l-.968 1.145Zm3.776 2.207c-.636.424-1.04.69-1.344.833-.296.138-.292.06-.225.095l-.703 1.325c.562.298 1.12.145 1.562-.06.433-.203.95-.55 1.542-.945l-.832-1.248ZM9.4 11.383c.045.736.083 1.37.181 1.849.099.48.3 1.019.85 1.31l.703-1.325c.056.03-.013.057-.084-.288-.072-.348-.104-.853-.153-1.638l-1.497.092Zm5.766.35c-.338-.093-.726-.218-1.125-.154l.238 1.481c-.016.003-.009-.004.067.01.088.018.206.05.42.109l.4-1.446Zm-1.313 1.592c.184-.123.286-.19.365-.234.067-.037.076-.033.06-.03l-.237-1.482c-.399.064-.728.303-1.02.498l.832 1.248Zm3.086-3.002c.198.76.325 1.25.365 1.603.04.35-.034.345.01.3l1.081 1.04c.431-.449.455-1.024.4-1.51-.056-.485-.219-1.1-.405-1.813l-1.451.38Zm-1.806 2.958c.686.19 1.286.358 1.76.415.485.058 1.062.028 1.502-.43l-1.081-1.04c.052-.054.08.019-.243-.02-.334-.04-.8-.167-1.537-.37l-.4 1.445Zm2.024-5.509c-.19.31-.41.64-.468 1.036l1.484.217s0-.004.004-.014a.61.61 0 0 1 .032-.07 6.21 6.21 0 0 1 .226-.382l-1.278-.787Zm1.133 1.79a6.731 6.731 0 0 1-.107-.44.626.626 0 0 1-.01-.082v-.015l-1.484-.217c-.058.393.057.776.15 1.133l1.451-.38Zm-1.867-4.053c.759.048 1.24.08 1.568.151a.886.886 0 0 1 .257.086c.012.007.013.01.01.006l-.006-.009 1.342-.668c-.278-.559-.802-.775-1.284-.88-.468-.102-1.087-.139-1.794-.183l-.093 1.497Zm2.215 2.72c.38-.618.71-1.152.902-1.598.195-.454.33-1.003.054-1.556l-1.343.668-.001-.005v.021a.994.994 0 0 1-.088.28c-.138.32-.396.744-.802 1.403l1.278.786Zm-4.522-3.762c.224.284.464.61.816.798l.703-1.325c.01.005-.003.002-.06-.058a6.527 6.527 0 0 1-.283-.346l-1.176.931Zm2.02-.478a5.963 5.963 0 0 1-.43-.035c-.074-.011-.081-.02-.07-.014l-.703 1.325c.357.19.76.199 1.11.22l.094-1.496ZM15.05 3.23c-.452-.572-.843-1.069-1.195-1.4-.353-.333-.835-.662-1.461-.562l.237 1.481c-.08.013-.056-.065.195.173.253.238.564.628 1.048 1.24l1.176-.932Zm-3.16 1.25c.27-.732.444-1.2.61-1.506.165-.304.212-.238.131-.225l-.237-1.481c-.626.1-.981.564-1.213.99-.23.425-.447 1.02-.699 1.704l1.408.518ZM7.004 6.635c-2.607 1.907-4.456 5.48-3.496 11.483l1.481-.236c-.89-5.566.837-8.527 2.9-10.036l-.885-1.21ZM4.959 18.241c.716-2.11 2.943-3.916 5.572-4.802l-.48-1.422c-2.884.973-5.592 3.03-6.513 5.742l1.42.482ZM10.28 16s.634 1.39 1.414 1.87c.78.477 2.306.41 2.306.41s-1.39.633-1.87 1.413c-.478.78-.41 2.307-.41 2.307s-.634-1.39-1.414-1.87C9.527 19.654 8 19.72 8 19.72s1.39-.633 1.87-1.413c.478-.78.41-2.307.41-2.307ZM18.48 15s-.422.927-.942 1.246c-.52.319-1.538.274-1.538.274s.927.422 1.246.942c.319.52.274 1.538.274 1.538s.422-.927.942-1.246c.52-.319 1.538-.274 1.538-.274s-.927-.422-1.246-.942c-.319-.52-.274-1.538-.274-1.538Z" />
    </svg>
  );
};
export default SvgStarFall;