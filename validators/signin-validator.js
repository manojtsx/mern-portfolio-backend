const { z } = require("zod");
const signinSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: "Username cannot be empty" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(15, { message: "Username can be 15 characters long" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password cannot be empty" })
    .min(6, { message: "Password must at least 6 characters long" })
    .max(255, { message: "Password must not be more than 255 characters" }),
});

module.exports = signinSchema;
