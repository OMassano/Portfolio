import About from "../views/About/About";
import Contact from "../views/Contact/Contact";
import Projects from "../views/Projects/Projects";
const linksNavbar = [
  {
    id: "aboutHeader",
    name: "about",
    href: <About />,
  },
  { id: "projectHeader", name: "Projects", href: <Projects /> },
  { id: "contactHeader", name: "Contact", href: <Contact /> },
];

export default linksNavbar;
