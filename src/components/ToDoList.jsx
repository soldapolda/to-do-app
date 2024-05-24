import ToDoItem from "./ToDoItem.tsx"

function ToDoList({ toDos, onDelete, onDone }) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">To-Do</th>
                    <th scope="col">Done</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((toDo, index) => (
                    <ToDoItem
                        key={index}
                        onDone={(id) => {
                            onDone(id)
                        }}
                        onDelete={(id) => {
                            onDelete(id)
                        }}
                        done={toDo.done}
                        id={index}
                    >
                        {toDo.title}
                    </ToDoItem>
                ))}
            </tbody>
        </table>
    )
}

export default ToDoList
