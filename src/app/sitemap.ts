import { MetadataRoute } from "next/types";

const BASE_URL = "https://jonathantrujillo.vercel.app/";

const pages: Array<{
  route: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  { route: "/", priority: 1, changeFrequency: "weekly" },
  { route: "/blog", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
