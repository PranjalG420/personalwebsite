import React from "react";
import Container from "../components/container";

export default function register() {
    return (
        <Container>
            <form className="flex flex-col items-center mt-16">
                <label className="text-2xl md:text-5xl font-semibold">
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
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg tablet:text-2xl mt-6 transition-all hover:ml-2"
                >
                    Submit
                </button>
                <label className="tablet:text-xl italic text-zinc-500 mt-6">
                    Already have an account? Sign in{" "}
                    <a href="/login" className="text-blue-600 underline">
                        here
                    </a>
                </label>
            </form>
        </Container>
    );
}
