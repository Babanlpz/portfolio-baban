import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  clasName?: string;
}>;

export const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "md:my-14 lg:my-20 max-w-2xl m-auto lg:px-6 px-4",
        props.clasName,
        "my-12"
      )}
    >
      {props.children}
    </section>
  );
};
