import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Tambahkan user contoh
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "hashedpassword123",
      phone: "1234567890",
    },
  });

  console.log("User created:", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
