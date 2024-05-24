import { useState } from "react"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"

function App() {
    const [toDos, setToDos] = useState([
        { title: "Posekat", done: false },
        { title: "Zalet travu kkokot", done: false },
        { title: "Posekat", done: true },
    ])

    const handleDelete = (index) => {
        setToDos(toDos.filter((_, i) => i !== index))
    }

    const handleDoneToggle = (index) => {
        setToDos(
            toDos.map((toDo, i) => {
                if (index === i) {
                    return {
                        ...toDo,
                        done: !toDo.done,
                    }
                }
                return toDo
            })
        )
    }

    return (
        <>
            <Header>To-do-list by Vosolto</Header>
            <ToDoList
                toDos={toDos}
                onDelete={handleDelete}
                onDone={handleDoneToggle}
            />
        </>
    )
}

export default App
