import React from "react";
import Container from "../components/container";

export default function register() {
    return (
        <Container top="flex-1">
            <form className="flex flex-col items-center">
                <label className="text-2xl tablet:text-5xl font-semibold">
                    Register
                </label>

                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 tablet:text-xl rounded-xl mt-6"
                ></input>
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 tablet:text-xl rounded-xl mt-6"
                ></input>
                <input
                    type="text"
                    placeholder="Password"
                    className="p-2 tablet:text-xl rounded-xl mt-6"
                ></input>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg tablet:text-2xl mt-6 transition-all tablet:hover:ml-2"
                >
                    Submit
                </button>
                <label className="tablet:text-xl italic text-zinc-500 mt-6">
                    Already have an account? Sign in{" "}
                    <a href="/signin" className="text-blue-600 underline">
                        here
                    </a>
                </label>
            </form>
        </Container>
    );
}
