import { PropsWithChildren } from "react";
import { Section } from "./Section";
import { CustomIcon } from "./icons/CustomIcons";

export const Hero = () => {
  return (
    <Section clasName="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Hey, I am Esteban 👋🏼</h1>
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
