import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");

    // List of colors to display
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    >
                        <input
                            type="radio"
                            id={color}
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => {
                                setSelectedColor(color);
                            }}
                            style={{ marginRight: "5px" }}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color:
                        (
                            selectedColor === "yellow" ||
                            selectedColor === "orange"
                        ) ?
                            "black"
                        :   "white",
                }}
            >
                This boxs color is {selectedColor}
            </div>
        </div>
    );
}
