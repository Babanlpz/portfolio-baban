import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  clasName?: string;
}>;

export const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "md:my-20 lg:my-32 max-w-4xl m-auto lg:px-6 px-4",
        props.clasName,
        "my-16"
      )}
    >
      {props.children}
    </section>
  );
};
