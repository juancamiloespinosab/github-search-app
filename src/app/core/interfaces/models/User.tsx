export type UserType = 'User' | 'Organization';

export interface User {
    avatar_url: string,
    login: string,
    type: UserType,
    score: number
}