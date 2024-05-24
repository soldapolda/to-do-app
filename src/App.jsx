import { useState } from "react"
import Header from "./components/Header"
import Filter from "./components/Filter"
import ToDoList from "./components/ToDoList"

function App() {
    const [toDos, setToDos] = useState([
        { title: "Posekat", done: false, id: 1 },
        { title: "Zalet travu kkokot", done: false, id: 2 },
        { title: "Posekat", done: true, id: 5 },
    ])

    const [toDoFilter, setToDoFilter] = useState("all")

    const visibleToDos = toDos.filter(
        (toDo) => toDoFilter === "all" || toDoFilter == String(toDo.done)
    )

    const handleDelete = (id) => {
        setToDos(toDos.filter((toDo) => toDo.id !== id))
    }

    const handleDoneToggle = (id) => {
        setToDos(
            toDos.map((toDo) => {
                if (id === toDo.id) {
                    return {
                        ...toDo,
                        done: !toDo.done,
                    }
                }
                return toDo
            })
        )
    }

    const handleFilterChange = (selectedValue) => {
        setToDoFilter(selectedValue)
        console.log(toDos)
        console.log(visibleToDos)
    }

    return (
        <>
            <Header>To-do-list by Vosolto</Header>
            <Filter handleChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="true">Done</option>
                <option value="false">Undone</option>
            </Filter>
            <ToDoList
                toDos={visibleToDos}
                onDelete={handleDelete}
                onDone={handleDoneToggle}
            />
        </>
    )
}

export default App
