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
}

main();