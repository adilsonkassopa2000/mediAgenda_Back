import { Request, Response } from "express";
export declare class UserController {
    create(request: Request, response: Response): Promise<Response<any, Record<string, any>> | undefined>;
    get(request: Request, response: Response): Promise<Response<any, Record<string, any>> | undefined>;
    login(request: Request, response: Response): Promise<Response<any, Record<string, any>> | undefined>;
    update(request: Request, response: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=user.controller.d.ts.map