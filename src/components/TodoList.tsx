import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";

const TodoList: React.FC = () => {
    const {error, todos, loading, limit, page} = useTypedSelector(state => state.todo)

    const {fetchTodos, setTodoPage} = useActions()

    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading){
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <>
            {todos.map(todo => {
                return <div key={todo.id}>{todo.id} - {todo.title}</div>
            })}
            <div style={{display: "flex"}}>
                {pages.map(p => {
                    return  <div key={p} onClick={() => setTodoPage(p)} style={{border: p === page? '2px solid green' : '1px solid gray', padding: 10}}>{p}</div>
                })}
            </div>

        </>
    );
};

export default TodoList;