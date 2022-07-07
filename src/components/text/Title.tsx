import { useState } from "react";
import Tooltip from "./Tooltip";

interface Props {
  children?: React.ReactNode;
}

export default function Title(props:Props) {
  const {children} = props
  const [Bold, setBold] = useState(true);
  const [TooltipVisible, setTooltipVisible] = useState(false);
  let isToolTipHovered = false;

  return (
    <div
      className="flex relative flex-row w-full justify-center"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => (isToolTipHovered ? "" : setTooltipVisible(false))}
    >
      <div
        contentEditable="true"
        className={`
        ${Bold ? "font-extrabold" : ""} 
        pb-4 text-center w-3/6 text-xl text-blue-900`}
      >
        {children} 
      </div>

      <Tooltip setBold={setBold} Bold={Bold} isVisible={TooltipVisible} />
    </div>
  );
}
