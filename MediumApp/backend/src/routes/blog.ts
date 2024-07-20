import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import {
  putBlogInput,
  postBlogInput,
} from "@prempardeshix/medium-common/dist/blogZod";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const token = c.req.header("authorization") || "";

  const result = await verify(token, c.env.JWT_SECRET);

  if (result) {
    const stringId = "" + result.id;

    c.set("userId", stringId);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "Authorization Failed!" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = postBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "Invalid input!" });
  }

  try {
    const result = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: parseInt(c.get("userId")),
      },
    });
    console.log(result.id);
    return c.json({ id: result.id });
  } catch (e) {
    // console.error("Error fetching blog:", e);
    c.status(403);
    return c.text("Failed!");
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = putBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "Invalid input!" });
  }
  try {
    await prisma.blog.update({
      where: {
        id: parseInt(body.id),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ msg: "Updated Successfully!" });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.text("Failed!");
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const all = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ blogs: all });
  } catch (e) {
    c.status(403);
    c.json({ msg: "Error occured!" });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const result = await prisma.blog.findUnique({
      where: {
        id: parseInt(c.req.param("id")),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ blog: result });
  } catch (e) {
    c.status(403);
    return c.text("Failed!");
  }
});
