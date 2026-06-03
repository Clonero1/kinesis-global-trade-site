import { PrismaClient } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  __kinesisPrisma?: PrismaClient;
};

const globalForPrisma = globalThis as GlobalWithPrisma;

export function getPrisma(): PrismaClient {
  if (!globalForPrisma.__kinesisPrisma) {
    globalForPrisma.__kinesisPrisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
    });
  }

  return globalForPrisma.__kinesisPrisma;
}
