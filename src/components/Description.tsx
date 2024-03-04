"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  text: string;
}

const Description = (props: DescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = props.text.split(" ");
  const itCanOverflow = splittedText.length > 25;
  const beginText = itCanOverflow
    ? splittedText.slice(0, 25 - 1).join(" ")
    : props.text;
  const endText = splittedText.slice(25 - 1).join(" ");

  return (
    <p {...props}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span className={cn(!isExpanded && "hidden")}>{endText}</span>
          <span
            className="cursor-pointer text-blue-600 hover:brightness-150"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " lihat lebih sedikit" : " lihat lebih banyak"}
          </span>
        </>
      )}
    </p>
  );
};

export default Description;
