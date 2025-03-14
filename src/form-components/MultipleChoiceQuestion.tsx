import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const answer = event.target.value;
        setSelectedChoice(answer);
        setIsCorrect(answer === expectedAnswer); // Check if the selected answer is correct
    };

    // Set initial message to show "❌" (incorrect) if no answer is selected yet
    const initialMessage =
        isCorrect === null ? "❌ Incorrect!"
        : isCorrect ? "✔️ Correct!"
        : "❌ Incorrect!";

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div style={{ marginTop: "10px" }}>
                <p>{initialMessage}</p>
            </div>
        </div>
    );
}
