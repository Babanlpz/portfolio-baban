"use client";

import { CalComEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const CallCom = () => {
  return (
    <>
      <Section clasName="mb-0 md:mb-0 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Schedule a call with me
        </h2>
        <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
          10 minutes to talk about your project and how I can help you.
        </p>
      </Section>
      <Section clasName="max-w-4xl mt-8 md:mt-8 lg:mt-8">
        <CalComEmbed />
      </Section>
    </>
  );
};
