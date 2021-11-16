import { PaddleLevelApiResponse } from "./paddle-level-api-response";

export interface RegisterApiResponse {
    id: number,
    name: string,
    email: string,
    paddle_level: PaddleLevelApiResponse
    paddle_level_id: number,
    updated_at: string,
    created_at: string,
}