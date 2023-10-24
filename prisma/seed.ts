import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.upsert({
        where: { username: "admin" },
        update: {},
        create: {
            username: "admin",
            password: "password",
            roles: {
                connectOrCreate: [
                    { where: { label: "admin" }, create: { label: "admin" } },
                    { where: { label: "user" }, create: { label: "user" } }
                ]
            }
        }
    });

    const sandwich1 = await prisma.sandwich.create({
        data: {
            bread: "baguette",
            meat: "ham",
            salad: "lettuce",
        },
    });

    const sandwich2 = await prisma.sandwich.create({
        data: {
            bread: "pain complet",
            meat: "boeuf",
            salad: "roquette",
        },
    });
    console.log({ sandwich1, sandwich2 });

}

main();