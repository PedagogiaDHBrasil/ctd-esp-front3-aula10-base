import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsAPIResponse } from "../../types";
import { defaultLocale } from "../../locale/constants";
import { products } from "./db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsAPIResponse>
) {
  // Por enquanto retornamos sempre as mesmas informações
  res.status(200).json(products[defaultLocale]);
}
