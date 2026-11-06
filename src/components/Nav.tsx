import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../lib/smooth";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") scrollToId(id);
    else navigate("/", { state: { scroll: id } });
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo"><b>MISHA®</b></Link>
      <div className="nav__links">
        <a href="/#work" onClick={go("work")}>Проекты</a>
        <a href="/#contact" className="nav__cta" onClick={go("contact")}>Связаться</a>
      </div>
    </nav>
  );
}
