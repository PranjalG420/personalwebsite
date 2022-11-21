import React from "react";
import Container from "../components/container";

export default function Hangman() {
    const arr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const word = "Hello World";
    function checkWord(letter) {
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === letter) {
                console.log(letter + " is in word");
            }
        }
    }
    return (
        <Container top="flex-1">
            <div className="flex flex-wrap justify-center items-center">
                {arr.map((letter) => (
                    <button
                        key={letter}
                        onClick={() => checkWord(letter)}
                        className="bg-blue-500 hover:bg-blue-700 m-1 min-w-[55px] text-white font-bold py-2 px-4 rounded"
                    >
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
        </Container>
    );
}
