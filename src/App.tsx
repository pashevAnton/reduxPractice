import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <UserList/>
            <hr/>
            <TodoList/>
        </>
    );
}

export default App;
