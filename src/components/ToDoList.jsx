import ToDoItem from "./ToDoItem.tsx"

function ToDoList({ toDos, onDelete, onDone }) {
    return (
        <table className="table table-bordered mt-2">
            <thead>
                <tr>
                    <th scope="col">Order</th>
                    <th scope="col">To-Do</th>
                    <th scope="col">Done</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((toDo, index) => (
                    <ToDoItem
                        key={toDo.id}
                        onDone={(id) => {
                            onDone(id)
                        }}
                        onDelete={(id) => {
                            onDelete(id)
                        }}
                        done={toDo.done}
                        id={toDo.id}
                        order={index + 1}
                    >
                        {toDo.title}
                    </ToDoItem>
                ))}
            </tbody>
        </table>
    )
}

export default ToDoList
