import { Router, Request, Response } from "https://deno.land/x/attain@1.1.2/mod.ts";
import series from "../data/series.ts";
const api = new Router();

api.get("/", (_req: Request, res: Response) => {
  res.status(200).send(series);
});

export default api;
