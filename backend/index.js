import dotenv from "dotenv"
dotenv.config()
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(newUser);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()
    process.exit(1)
  })