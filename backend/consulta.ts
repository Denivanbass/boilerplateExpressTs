import { prisma } from "./lib/prisma"


class ConsultaService {
    async execute() {

        const user = await prisma.user.findMany()



        console.log(user)
        return(user)
    }
}
new ConsultaService().execute()
export { ConsultaService }