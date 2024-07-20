"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBlogInput = exports.postBlogInput = void 0;
const zod_1 = require("zod");
exports.postBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.putBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.number(),
});
