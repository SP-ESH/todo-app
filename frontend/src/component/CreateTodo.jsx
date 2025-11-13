import { useState } from "react";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{
                padding: "10px",
                margin: "10px",
            }}
                onChange={(e) => { setTitle(e.target.value); console.log(e.target.value) }}
                type="text" placeholder="title" /> <br />
            <input style={{
                padding: "10px",
                margin: "10px",
            }}
                onChange={(e) => setDescription(e.target.value)}
                type="text" placeholder="description" /> <br />

            <button style={{
                padding: "10px",
                margin: "10px",
            }}
                onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        Headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(async (res) => {
                            const response = await res.json();
                            alert("Todo created");
                        })
                }}
            >Add to Todo</button>
        </div >
    )
}
export default CreateTodo