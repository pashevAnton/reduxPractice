import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action.creator/user";
import {useActions} from "../hooks/useAction";
const UserList: React.FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading){
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {users.map(user => {
                return <div key={user.id}>{user.name}</div>
            })}
        </>
    );
};

export default UserList;