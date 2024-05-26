import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { Section } from "./Section";
import { Work } from "./Work";
import { CustomIcon } from "./icons/CustomIcons";

export const Hero = () => {
  return (
    <Section clasName="flex flex-col gap-2 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Hey, I am Esteban 👋🏼</h1>
      <p className="text-lg leading-9">
        I help{" "}
        <Code>
          <CustomIcon
            className="inline mb-0.5 mr-0.5"
            name="youtube"
            size={16}
          />
          Youtubers
        </Code>{" "}
        grow on Youtube with captivating{" "}
        <Code className="whitespace-nowrap">
          <CustomIcon className="inline mb-0.5 mr-0.5" name="web" size={16} />
          video editing.
        </Code>
      </p>
      <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-4">
        <Button size="lg" className="w-fit ">
          Schedule a call
        </Button>
        <Button size="lg" variant="ghost" className="w-fit">
          {" "}
          <CustomIcon
            className="mr-2 text-foreground"
            name="linkedin"
            size={20}
          />
          @babanlpz
        </Button>
      </div>
      <Work />
    </Section>
  );
};

const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 -mx-0.5 rounded-md items-center  bg-accent/20 border-accent border py-1">
      {props.children}
    </span>
  );
};
