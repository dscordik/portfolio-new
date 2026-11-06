import type { Project } from "../data/projects";

export default function Art({ p, n }: { p: Project; n: number }) {
  return (
    <div className="art">
      {p.image ? (
        <img className="art__img" src={p.image} alt={p.title} loading="lazy" />
      ) : (
        <b>{String(n).padStart(2, "0")}</b>
      )}
    </div>
  );
}
