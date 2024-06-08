const { z } = require("zod");
const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name cannot be empty" })
    .min(3, { message: "Name must at least 3 characters long" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  username: z
    .string()
    .trim()
    .min(1, { message: "Username cannot be empty" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(15, { message: "Username can be 15 characters long" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email cannot be empty" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone cannot be empty" })
    .min(10, { message: "Phone must at least  10 long" })
    .max(255, { message: "Phone must not be more than 255 characters" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password cannot be empty" })
    .min(6, { message: "Password must at least 6 characters long" })
    .max(255, { message: "Password must not be more than 255 characters" }),
});

module.exports = signupSchema;
