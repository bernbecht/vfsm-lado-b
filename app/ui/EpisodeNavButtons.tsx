import { Button } from "./Button";

export function EpisodeNavButtons() {
  return (
    <div className="md:flex gap-2 hidden ">
      <Button text="<- #18" secondary></Button>
      <Button text="#16 ->" secondary></Button>
    </div>
  );
}
