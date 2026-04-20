import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => {
                <li key={todo.id}>
                    {todo.text}
                    <Button onClick={() => dispatchEvent(removeTodo(todo.id))}>Delete</Button>
                </li>

            })}
        </>
    )
}
