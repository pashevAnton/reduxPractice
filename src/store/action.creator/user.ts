import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
//https://jsonplaceholder.typicode.com/users
export const fetchUsers = (): any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setTimeout(() => {
                dispatch({type:UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)

        } catch (e) {
            dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузки пользователей"})
        }
    }
}