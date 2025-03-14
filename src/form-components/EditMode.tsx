import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="form-switch">
                <input
                    type="checkbox"
                    id="editModeSwitch"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
                <label htmlFor="editModeSwitch">Edit Mode</label>
            </div>

            {isEditMode ?
                <div>
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        id="nameInput"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <div>
                        <label htmlFor="studentCheckbox">Student</label>
                        <input
                            id="studentCheckbox"
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                    </div>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
