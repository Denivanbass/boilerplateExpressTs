import { prisma } from "../../lib/prisma"


class GetUserService {
    async execute () {

        const user = await prisma.user.findMany()

        return (user)
    }
}
export { GetUserService }