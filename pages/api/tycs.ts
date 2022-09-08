// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaultLocale } from "../../locale/constants";
import { TyCsAPIResponse } from "../../types";
import { tycs } from "./db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TyCsAPIResponse>
) {
  // Por enquanto retornamos sempre as mesmas informações
  res.status(200).json(tycs[defaultLocale]);
}
