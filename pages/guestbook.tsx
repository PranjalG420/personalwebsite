import React from "react";
import Container from "../components/container";

export default function Guestbook() {
    return (
        <Container>
            <div className="flex flex-col items-start justify-start">
                <p className="text-2xl mb-4 tablet:text-4xl font-semibold">
                    Guestbook
                </p>
                <p className="text-base text-zinc-500">
                    Leave a comment below. The more inspirational and helpful,
                    the better!
                </p>
            </div>
        </Container>
    );
}
