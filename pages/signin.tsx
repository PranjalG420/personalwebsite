import React from "react";
import Container from "../components/container";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
    return (
        <Container top="flex-1">
            <div key="GitHub" className="flex flex-col items-center">
                <p className="text-2xl mb-4 tablet:text-4xl font-semibold">
                    Sign in with GitHub
                </p>
                <button
                    onClick={() => signIn("github")}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg tablet:text-xl transition-all tablet:hover:ml-2"
                >
                    Sign In
                </button>
            </div>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
