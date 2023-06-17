export enum UserActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string
}

interface FetchUsersAction {
    type: UserActionType.FETCH_USERS
}

interface FetchUserSuccess {
    type: UserActionType.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUserError {
    type: UserActionType.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUserSuccess | FetchUserError
