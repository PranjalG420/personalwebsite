import React from "react";
import Container from "../components/container";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
    return (
        <Container top="flex-1">
            <div key="GitHub">
                <button onClick={() => signIn("github")} className="">
                    Sign in with GitHub
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
