import { useEffect, useState } from "react"
import Header from "./components/Header"
import Filter from "./components/Filter"
import ToDoList from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm"

function App() {
    const [toDos, setToDos] = useState(
        JSON.parse(localStorage.getItem("to_dos")) ?? []
    )

    const [toDoFilter, setToDoFilter] = useState("all")

    useEffect(() => {
        const jsonData = JSON.stringify(toDos)
        localStorage.setItem("to_dos", jsonData)
    }, [toDos])

    const visibleToDos = toDos.filter(
        (toDo) => toDoFilter === "all" || toDoFilter == String(toDo.done)
    )

    const handleDelete = (id) => {
        setToDos(toDos.filter((toDo) => toDo.id !== id))
    }

    const handleAdd = (data) => {
        const newToDo = {
            title: data.title,
            done: false,
            id: toDos.length === 0 ? 0 : toDos[toDos.length - 1].id + 1,
        }
        setToDos([...toDos, newToDo])
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
            <ToDoForm onSubmit={handleAdd} />
        </>
    )
}

export default App
