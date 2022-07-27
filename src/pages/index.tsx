import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/PYCButton";

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Server Manager Documentation"
      description="Server Manage Docs"
    >
      <PYCHero
        title="Server Manager Documentation"
        subtitle="Server Manager - A simple multipurpose Discord bot"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        Imagine a bot that can take away all the stress of setting up a simple moderation bot, so you can just relax and have the bot do it for you. Server Manager is here to help!
      </main>
    </DefaultLayout>
  );
}
