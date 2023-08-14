import About from "../views/About/About";
import Contact from "../views/Contact/Contact";
import Projects from "../views/Projects/Projects";
const linksNavbar = [
  {
    id: "about",
    name: "aboutHeader",
    href: <About />,
  },
  { id: "projects", name: "projectHeader", href: <Projects /> },
  { id: "contact", name: "contactHeader", href: <Contact /> },
];

export default linksNavbar;
