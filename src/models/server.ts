import { App } from "../dependencies/deps.ts";
import { api, home } from "../routes/index.ts";

const PORT = JSON.parse(Deno.env.get("PORT") as string);

class Server {
  app: App;
  port: number;

  constructor() {
    this.app = new App();
    this.port = parseInt(PORT);
  }

  start() {
    this.app.use("/", home)
    this.app.use("/api", api);
    this.app.listen(this.port);
    console.log(`Server running on port http://localhost:${this.port}/api`);
  }
}

export default Server;
