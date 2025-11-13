const Todos = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <div key={todo._id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <button
                                onClick={() => {
                                    fetch('http://localhost:3000/completed', {
                                        method: 'PUT',
                                        body: JSON.stringify({
                                            id: todo._id,
                                            completed: !todo.completed,
                                        }),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                        .then(async (res) => {
                                            const response = await res.json();
                                            console.log(response);
                                            alert("Todo marked as completed");
                                        })
                                }}
                            >{todo.completed === true ? "Completed" : "Mark as Completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todos