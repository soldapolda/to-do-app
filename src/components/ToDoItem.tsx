import React from "react"

function ToDoItem({ children, onDone, onDelete, id, done = false }) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{children}</td>
            <td>
                <button
                    onClick={() => onDone(id)}
                    className="btn btn-outline-primary"
                >
                    {done ? "Done" : "Undone"}
                </button>
            </td>
            <td>
                <button
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ToDoItem
