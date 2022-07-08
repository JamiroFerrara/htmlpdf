import { useState } from "react";
import Tooltip from "./Tooltip";

interface Props {
  children?: React.ReactNode;
  center?: boolean;
  bold?: boolean;
}

export default function Paragraph(props:Props) {
  const {children, center, bold} = props
  const [Bold, setBold] = useState(bold);
  const [TooltipVisible, setTooltipVisible] = useState(false);
  let isToolTipHovered = false;

  return (
    <div
      className={`
      ${center ? "justify-center" : "ml-10"} 
      flex relative flex-row w-full`}

      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => (isToolTipHovered ? "" : setTooltipVisible(false))}
    >
      <div
        contentEditable="true"
        className={`
        ${Bold ? "font-extrabold" : ""} 
        pb-4`}
      >
        {children} 
      </div>

      <Tooltip setBold={setBold} Bold={Bold} isVisible={TooltipVisible} />
    </div>
  );
}
