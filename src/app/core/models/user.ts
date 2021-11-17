import { PaddleLevelApiResponse } from "./interfaces/paddle-level-api-response";

export class User {
    id: number;
    rol: number;
    name: string;
    email: string;
    paddle_level: PaddleLevelApiResponse;

    constructor(data: User) {
        Object.assign(this, data);
    }
}
