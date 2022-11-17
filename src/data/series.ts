import { config } from '../dependencies/deps.ts';

config({ export: true });

const filename = Deno.env.get("FILENAME") as string;

const content = await Deno.readTextFile(filename);
const series = JSON.parse(content);

export default series;
