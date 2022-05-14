import { User } from "../models/User";
export interface UsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}