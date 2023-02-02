import Head from "next/head";
import React from "react";
import Container from "../components/container";
import { TitleBlock, ToolBlock } from "../components/smallcomponents";

export default function Tools() {
    return (
        <Container>
            <Head>
                <title>Tools</title>
            </Head>
            <p className="default-title tablet:mb-2">Tools Used</p>
            <TitleBlock>Editing</TitleBlock>
            <ToolBlock
                link="https://code.visualstudio.com/"
                text="Extensions..."
            >
                Visual Studio Code
            </ToolBlock>
            <ToolBlock
                link="https://www.jetbrains.com/clion/"
                text="I needed another IDE..."
            >
                CLion
            </ToolBlock>
            <TitleBlock>Development</TitleBlock>
            <ToolBlock
                link="https://nextjs.org/"
                text="Awesome framework for web apps"
            >
                NextJs
            </ToolBlock>
            <ToolBlock
                link="https://www.typescriptlang.org/"
                text="Javscript but better"
            >
                Typescript
            </ToolBlock>
            <ToolBlock link="https://reactjs.org/" text="Blissful Components">
                React
            </ToolBlock>
            <ToolBlock link="https://feathericons.com/" text="Minimalist Icons">
                React Feather
            </ToolBlock>
            <ToolBlock link="https://tailwindcss.com/" text="Long classnames">
                Tailwind CSS
            </ToolBlock>
            <ToolBlock link="https://supabase.com/" text="PostgreSQL Database">
                Supabase
            </ToolBlock>
            <ToolBlock link="https://www.prisma.io/" text="Database ORM">
                Prisma
            </ToolBlock>
            <TitleBlock>Designing</TitleBlock>
            <ToolBlock
                link="https://www.figma.com/"
                text="My Figma profile is on the footer"
            >
                Figma
            </ToolBlock>
            <ToolBlock link="https://www.getpaint.net/" text="It's like paint">
                paint.net
            </ToolBlock>
            {/* <img src="/logo.svg" /> */}
        </Container>
    );
}
