import { PermissionManager } from "../services/permission-manager";
import { PaddleLevelApiResponse } from "./interfaces/paddle-level-api-response";
import { Permission } from "./permission";

export class User {
    id: number;
    rol: number;
    name: string;
    email: string;
    paddle_level: PaddleLevelApiResponse;

    constructor(data: User) {
        Object.assign(this, data);
    }

    can(permission: Permission) {
        return PermissionManager.allow(this.rol.toString(), permission);
    }
}
