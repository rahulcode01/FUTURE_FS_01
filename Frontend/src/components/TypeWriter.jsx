import { useEffect, useState } from "react";

const TypeWriter = ({
    words = [],
    typingSpeed = 100,
    deletingSpeed = 50,
    delay = 1500,
}) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        let timeout;

        if (!isDeleting) {
            // Typing
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
                if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }, typingSpeed);
        } else {
            // Deleting
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

    return (
        <span>
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TypeWriter;
