import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import {
  signupInput,
  signinInput,
} from "@prempardeshix/medium-common/dist/userZod";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "Invalid Input" });
  }

  try {
    const result = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
    console.log(result);
    const token = await sign(
      {
        id: result.id,
        email: result.email,
        password: result.password,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      token,
    });
  } catch (e) {
    c.status(411);
    return c.text("Failed!");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ msg: "Invalid input!" });
  }

  try {
    const exist = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!exist) {
      c.status(403);
      return c.json({ error: "User does not exist!" });
    }

    const token = await sign(
      {
        email: exist.email,
        password: exist.password,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      token,
    });
  } catch (e) {
    c.status(411);
    return c.text("Failed!");
  }
});
