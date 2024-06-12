import { object, string, number, TypeOf } from "zod";

// Define the payload schema
export const productPayload = object({
  title: string({
    required_error: "Title is required",
  }),
  description: string({
    required_error: "Description is required",
  }).min(120, "Description should be at least 120 characters long"),
  amount: number({
    required_error: "Amount is required",
  }),
  image: string({
    required_error: "Product Image is required",
  }),
});

// Define the params schema
const productParams = object({
  productId: string({
    required_error: "Product id is required",
  }),
});

// Combine schemas for different operations
export const createProductSchema = object({
  body: productPayload,
});

export const updateProductSchema = object({
  body: productPayload,
  params: productParams,
});

export const deleteProductSchema = object({
  params: productParams,
});

export const getProductSchema = object({
  params: productParams,
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;
export type GetProductInput = TypeOf<typeof getProductSchema>;
