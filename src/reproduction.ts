import { getEntry } from "astro:content";

const a = await getEntry("tags", "en\a")
const b = await getEntry("blog", "en/first-post")