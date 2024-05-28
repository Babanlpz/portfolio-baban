import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { Section } from "./Section";
import { CustomIcon } from "./icons/CustomIcons";

export const Hero = () => {
  return (
    <Section clasName="flex flex-col gap-2 lg:gap-4">
      <div
        className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold">Hey, I am Louise👋🏼</h1>

      <p className="text-lg leading-9 text-muted-foreground">
        I help{" "}
        <Code className="whitespace-nowrap">
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
          @louisemdev
        </Button>
      </div>
    </Section>
  );
};

const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 -mx-0.5 text-foreground rounded-md items-center  bg-accent/20 border-accent border py-1">
      {props.children}
    </span>
  );
};
