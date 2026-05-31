import { prisma } from "../lib/prisma.js"



class GetUserService {
    async execute () {

        const user = await prisma.user.findMany()

        return (user)
    }
}
export { GetUserService }