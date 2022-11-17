import { Router, Request, Response } from "https://deno.land/x/attain@1.1.2/mod.ts";
const home = new Router();

home.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Hello World!. Navigate to /api to see the series data.");
});

export default home;
