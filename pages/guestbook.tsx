import React, { useState } from "react";
import Container from "../components/container";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import { CustomButton } from "../components/smallcomponents";
import Head from "next/head";

export default function Guestbook({ data: guestbook }) {
    const { data: session } = useSession();
    const [guestbookentry, setGuestbookentry] = useState("");
    const router = useRouter();
    const handleSend = async () => {
        try {
            console.log("Success");
            await fetch("/api/guestbook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    guestbookentry: guestbookentry,
                    name: session.user.name,
                }),
            });
            router.push("/guestbook");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Head>
                <title>Guestbook</title>
            </Head>
            <h1 className="desktop:text-4xl text-2xl font-semibold mb-2">
                Guestbook
            </h1>
            <p>
                The guestbook is a cool feature that allows me to communicate
                with any visitors directly. You can leave some feedback or a
                personal message for me, for others to view as well.
            </p>
            <div className="flex items-start flex-col gap-4 py-4 border-b-2 border-neutral-600">
                {(session && (
                    <>
                        <textarea
                            spellCheck="false"
                            className=" w-full bg-neutral-800 px-0.5 py-1 focus:outline-none rounded resize-none"
                            placeholder="Enter your message here."
                            maxLength={100}
                            rows={1}
                            onChange={(e) => {
                                setGuestbookentry(e.target.value);
                            }}
                        ></textarea>
                        <div className="flex gap-2">
                            <CustomButton button_function={handleSend}>
                                Submit
                            </CustomButton>
                            <CustomButton
                                button_function={() => {
                                    signOut();
                                }}
                            >
                                Sign out
                            </CustomButton>
                        </div>
                    </>
                )) || (
                    <>
                        <CustomButton button_function={() => signIn()}>
                            Sign in
                        </CustomButton>
                    </>
                )}
                <p className="text-base">Only your name will be shown.</p>
            </div>

            {JSON.parse(guestbook).map((entry) => (
                <div key={entry.id} className="flex items-start flex-col py-2">
                    <p className="d">{entry.guestbookentry}</p>
                    <div className="flex flex-row items-center text-neutral-500">
                        <p>{entry.name}</p>
                        <p className="mx-2">{"/"}</p>
                        <span>
                            {format(new Date(entry.date), "dd MMMM yyyy")}
                        </span>
                    </div>
                </div>
            ))}
        </Container>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const prisma = new PrismaClient();
    const guestbook = await prisma.guestbook.findMany({
        orderBy: {
            id: "desc",
        },
    });
    return {
        props: { data: JSON.stringify(guestbook) },
    };
}
