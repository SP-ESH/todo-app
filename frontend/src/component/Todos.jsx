const Todos = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <div>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <button>{todo.completed === true ? "Completed" : "Mark as Completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todos