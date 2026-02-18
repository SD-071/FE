import z from "zod";

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    price: z.number(),
    description: z.string().min(1),
    category: z.string().min(0),
    image: z.httpUrl(),
    rating: z.object({
        rate: z.number(),
        count: z.number()
    })
});

export const ProductsArraySchema = z.array(ProductSchema);
