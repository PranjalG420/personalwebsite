import React from "react";
import Container from "../components/container";

export default function Tools() {
    return (
        <Container top="flex-0">
            <div className="flex items-start flex-col tablet:w-[900px]">
                <p className="text-2xl tablet:text-5xl font-semibold mb-2">
                    Tools Used
                </p>
                <p className="text-base tablet:text-lg mb-2">Code Editor:</p>
                <p className="text-base text-zinc-500">
                    Leave a comment below. The more inspirational and helpful,
                    the better!
                </p>
            </div>
        </Container>
    );
}
