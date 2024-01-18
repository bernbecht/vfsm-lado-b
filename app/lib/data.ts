import { promises as fs } from "fs";

interface Episode {
  id: number;
  title: string;
  description: string;
  img: string;
  release_date: string;
  spotify_url: string;
}

export async function fetchEpisode(id: number) {
  const file = await fs.readFile(
    process.cwd() + "/app/lib/episodes.json",
    "utf8"
  );
  const data: Episode[] = JSON.parse(file);
  const episode = data.find((episode) => episode.id === id);
  return episode;
}
