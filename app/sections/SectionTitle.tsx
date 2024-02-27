"use client";

import { createMoveToIdFunction } from "../../lib/clientUtility";
import { SectionTitleHeading } from "./SectionTitle.style";

type SectionTitleProps = {
  className?: string;
  targetId: string;
  title: string;
};

export function SectionTitle({
  className,
  targetId,
  title,
}: SectionTitleProps) {
  return (
    <SectionTitleHeading
      className={className}
      onClick={createMoveToIdFunction(targetId)}
    >
      {title}
    </SectionTitleHeading>
  );
}
