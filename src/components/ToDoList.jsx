import ToDoItem from "./ToDoItem.tsx"

function ToDoList() {
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
                <ToDoItem
                    onDone={(id) => {
                        console.log(id)
                    }}
                    onDelete={(id) => {
                        console.log(id)
                    }}
                    done={true}
                    id="5"
                >
                    Posekat travu jo
                </ToDoItem>
            </tbody>
        </table>
    )
}

export default ToDoList
