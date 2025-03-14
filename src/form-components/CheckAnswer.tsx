import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                    setUserAnswer(e.target.value);
                }}
            />
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
