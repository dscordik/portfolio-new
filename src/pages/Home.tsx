import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { scrollToId } from "../lib/smooth";
import Seo from "../components/Seo";
import Art from "../components/Art";

gsap.registerPlugin(ScrollTrigger);
const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const loc = useLocation();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".rv", { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.05 });
      gsap.to(".hero__title", { yPercent: -12, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.fromTo(".band__text", { xPercent: 5 }, { xPercent: -45, ease: "none",
        scrollTrigger: { trigger: ".band", start: "top bottom", end: "bottom top", scrub: true } });
      const cards = gsap.utils.toArray<HTMLElement>(".card");
      cards.forEach((c, i) => {
        const next = cards[i + 1];
        if (next) gsap.to(c, { scale: 0.92, opacity: 0.45, ease: "none",
          scrollTrigger: { trigger: next, start: "top 85%", end: "top 15%", scrub: true } });
        const b = c.querySelector(".art b");
        if (b) gsap.fromTo(b, { yPercent: 25 }, { yPercent: -25, ease: "none",
          scrollTrigger: { trigger: c, start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.from(".contact__title", { y: 80, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".contact", start: "top 70%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = (loc.state as { scroll?: string } | null)?.scroll;
    if (id) setTimeout(() => scrollToId(id), 80);
  }, [loc.state]);

  return (
    <div ref={root}>
      <Seo
        title="Misha — Fullstack-разработчик: сайты, лендинги, Telegram Mini App"
        description="Разрабатываю сайты, лендинги, интернет-магазины и Telegram Mini App на React и FastAPI. Кейсы для кафе, салонов, мастеров и магазинов."
      />
      <header className="hero pad" id="top">
        <p className="hero__tag rv">{site.role} · React · TypeScript · FastAPI</p>
        <h1 className="hero__title rv">MISHA</h1>
        <div className="meta rv">
          <div><strong>18</strong>лет</div>
          <div><strong>2 года</strong>в разработке</div>
          <div><strong>Realtime</strong>WebSocket · Telegram-боты</div>
          <div><strong>Fullstack</strong>от вёрстки до базы данных</div>
        </div>
      </header>

      <div className="band"><span className="band__text">PORTFOLIO — PORTFOLIO — PORTFOLIO — PORTFOLIO</span></div>

      <div className="st pad" id="work">
        <h2>Проекты</h2>
        <p>Каждый проект закрывает конкретную боль конкретной ниши. Откройте кейс, чтобы увидеть, какую.</p>
      </div>

      <main className="stack">
        {projects.slice(0, 4).map((p, i) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="card"
            style={{ ["--c1" as string]: p.colors[0], ["--c2" as string]: p.colors[1] }}>
            <div className="info">
              <div>
                <span className="num">{pad(i + 1)} / {p.niche}</span>
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <div className="chips">{p.stack.slice(0, 5).map((s) => <i key={s}>{s}</i>)}</div>
              </div>
              <span className="more">Смотреть кейс</span>
            </div>
            <Art p={p} n={i + 1} />
          </Link>
        ))}
      </main>

      <div className="st pad st--small"><h2>Ещё работы</h2></div>
      <div className="rows pad">
        {projects.slice(4).map((p, i) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="row">
            <span className="n">{pad(i + 5)}</span>
            <div><h4>{p.title}</h4><small>{p.niche}</small></div>
            <em>→</em>
          </Link>
        ))}
      </div>

      <section className="contact pad" id="contact">
        <h2 className="contact__title">Давай<br /><em>работать</em></h2>
        <div className="btns">
          <a className="btn f" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href={site.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a className="btn" href={site.email}>Email</a>
        </div>
        <footer className="footer">© 2026 Миша. Сделано на React.</footer>
      </section>
    </div>
  );
}
