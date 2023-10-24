import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    
    if (!!req.user) {
        return !!data ? req.user[data] : req.user;
    }

    const token = req.headers.authorization ? (req.headers.authorization as string).split(" ") : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], "my-secret");
        return !!data ? decoded[data] : decoded;
    }
})