import { useLayoutEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { projects } from "../data/projects";
import Seo from "../components/Seo";

export default function ProjectPage() {
  const { id } = useParams();
  const root = useRef<HTMLElement>(null);
  const i = projects.findIndex((p) => p.id === id);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".rv", { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.05 });
    }, root);
    return () => ctx.revert();
  }, [id]);

  if (i < 0) return <Navigate to="/" replace />;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <section ref={root} className="pp pad" style={{ ["--c1" as string]: p.colors[0] }}>
      <Seo title={`${p.title} — кейс | Misha`} description={`${p.niche}. ${p.pain} ${p.short}`} />
      <Link className="back rv" to="/">← На главную</Link>
      <div className="lab rv">{String(i + 1).padStart(2, "0")} · {p.niche}</div>
      <h1 className="rv">{p.title}</h1>
      <p className="lead rv">{p.short}</p>
      <div className="btns rv">
        {p.demo && <a className="btn f" href={p.demo} target="_blank" rel="noopener noreferrer">Посмотреть проект ↗</a>}
        <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {p.image && <div className="shot rv"><img src={p.image} alt={p.title} /></div>}
      <div className="grid">
        <div className="box box--pain rv"><h5>Боль клиента</h5><q>{p.pain}</q></div>
        <div className="side">
          <div className="box rv"><h5>Как я это решил</h5><p>{p.solution}</p></div>
          <div className="box rv"><h5>Стек</h5><div className="chips chips--flush">{p.stack.map((s) => <i key={s}>{s}</i>)}</div></div>
        </div>
      </div>
      <Link className="next rv" to={`/projects/${next.id}`}>
        <small>Следующий проект</small><h3>{next.title} →</h3>
      </Link>
    </section>
  );
}
