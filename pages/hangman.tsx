import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/container";

export default function Hangman() {
    const word = "hello";
    const [guess, setGuess] = useState(0);
    const [isFailed, setIsFailed] = useState(false);
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const [guessed, setGuessed] = useState<string[]>([]);
    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessed.includes(letter)) return;
            setGuessed((prev) => [...prev, letter]);
        },
        [guessed]
    );
    return (
        <Container top="flex-1">
            <div className="flex flex-col items-center">
                <p>Guess {guess} of 5</p>
                <div className="flex flex-row  mx-auto mb-5">
                    {word.split("").map((letter, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-wrap justify-center min-h-[55px] min-w-[55px] items-center text-3xl border-b-2 mx-1 gap-1 "
                            >
                                <p
                                    className={
                                        guessed.includes(letter)
                                            ? "visible"
                                            : "hidden"
                                    }
                                >
                                    {letter.toUpperCase()}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap mx-auto justify-center ">
                    {alpha.map((x) => (
                        <button
                            key={x}
                            onClick={() => {
                                if (
                                    word
                                        .split("")
                                        .includes(
                                            String.fromCharCode(x).toLowerCase()
                                        )
                                ) {
                                    addGuessedLetter(
                                        String.fromCharCode(x).toLowerCase()
                                    );
                                } else if (guess < 5) {
                                    setGuess((prev) => prev + 1);
                                } else {
                                    setIsFailed(true);
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 m-1 tablet:min-w-[55px] text-white font-bold py-2 px-4 rounded"
                        >
                            {String.fromCharCode(x)}
                        </button>
                    ))}
                </div>
            </div>
        </Container>
    );
}
