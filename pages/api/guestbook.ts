import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const prisma = new PrismaClient();
        await prisma.user.create({
            data: {
                guestbookentry: req.body.guestbookentry,
            },
        });
    } else {
        return res.status(401).json({ error: "Method not allowed" });
    }
}
