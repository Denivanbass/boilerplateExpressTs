import { Request, Response } from "express"
import { GetUserService } from "../Services/getUserService"


class GetUserController {
    async handle (req: Request, res: Response) {

        const getUserService = new GetUserService()

        const user = await getUserService.execute()

        return res.json(user)
    }
}
export { GetUserController }