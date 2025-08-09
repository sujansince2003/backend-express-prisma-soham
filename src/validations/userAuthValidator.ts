import * as z from "zod";

const UserAuthSchema = z.object({
    username: z.string().min(2).max(100),
    email: z.email(),
    password: z.string()

})

export default UserAuthSchema


