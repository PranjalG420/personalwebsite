import React from "react";
import Container from "../components/container";

export default function register() {
    return (
        <div>
            <form className="flex flex-col items-center">
                <label className="text-3xl md:text-5xl font-semibold">
                    Register
                </label>
                <div className="p-[5px] mt-6 rounded-xl">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 text-xl rounded-xl"
                    ></input>
                </div>
                <div className="p-[5px] mt-6 rounded-xl">
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-2 text-xl rounded-xl"
                    ></input>
                </div>
                <div className="p-[5px] mt-6 rounded-xl">
                    <input
                        type="text"
                        placeholder="Password"
                        className="p-2 text-xl rounded-xl"
                    ></input>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-xl md:text-2xl mt-6 transition-all hover:ml-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
