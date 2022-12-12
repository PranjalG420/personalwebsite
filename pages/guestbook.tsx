import React, { useState } from "react";
import Container from "../components/container";
import { useSession, signIn } from "next-auth/react";
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
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container top="flex-0">
            <Head>
                <title>Guestbook</title>
            </Head>
            <p className="default-title">Guestbook</p>
            {(session && (
                <div className="flex items-start flex-col tablet:w-[900px] gap-4 py-4 rounded-xl">
                    <p className="default-subtitle2">
                        Leave a cool and inspirational message for future
                        viewers!
                    </p>
                    <textarea
                        className=" w-full p-2 font-semibold text-zinc-400 dark:bg-zinc-800 bg-zinc-200 rounded-lg resize-none"
                        placeholder="Enter your message here."
                        maxLength={100}
                        rows={1}
                        onChange={(e) => {
                            setGuestbookentry(e.target.value);
                        }}
                    ></textarea>
                    {/* <button
                            type="submit"
                            className="my-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg tablet:text-xl transition-all tablet:hover:ml-2"
                        >
                            Submit
                        </button> */}
                    <CustomButton button_function={handleSend}>
                        Submit
                    </CustomButton>

                    <p className="italic default-text font-semibold">
                        Only your name will be shown.
                    </p>
                    <div className="border-b-2 dark:border-b-zinc-200 border-b-zinc-900 w-full mb-2"></div>
                </div>
            )) || (
                <div className="flex items-start flex-col tablet:w-[900px] gap-4 py-4 rounded-xl">
                    <p className="default-subtitle">
                        Sign in to use the Guestbook.
                    </p>
                    <p className="default-subtitle2">
                        And leave a cool message for future viewers!
                    </p>
                    <CustomButton button_function={() => signIn()}>
                        Sign in
                    </CustomButton>
                    <p className="default-text font-semibold italic">
                        Only your name will be shown.
                    </p>
                    <div className="border-b-2 dark:border-b-zinc-200 border-b-zinc-900 w-full my-2"></div>
                </div>
            )}
            {JSON.parse(guestbook).map((entry) => (
                <div
                    key={entry.id}
                    className="flex items-start flex-col tablet:w-[900px] p-2 rounded-xl"
                >
                    <p className="default-subtitle2">{entry.guestbookentry}</p>
                    <div className="flex flex-row items-center default-text">
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
