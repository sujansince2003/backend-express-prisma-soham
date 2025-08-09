import prisma from "../db/db.config";
import { NextFunction, Response, Request } from "express"
import UserAuthSchema from "../validations/userAuthValidator";
import bcrypt from "bcryptjs";

const GetAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
    return;
}


export const RegisterUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const validate = UserAuthSchema.safeParse(body);
        if (!validate.success) {
            const errors = validate.error.format();
            res.status(400).json({ errors });
            return;
        }

        const { username, email, password } = validate.data

        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userExists) {
            res.status(409).json({ message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);








        const createUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        res.status(201).json({ message: "User created successfully", user: createUser });
        return;

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }






}

export default GetAllUsers;