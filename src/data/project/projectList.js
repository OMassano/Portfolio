const projectsList = [
  {
    id: 1,
    name: "Dogs project",
    links: [
      {
        name: "github",
        url: "https://github.com/OMassano/Individual-Project",
      },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Dog encyclopedia, includes searchbar, filters, sorting options, forms that allow the user to add more dogs to the database and calls to an external API. Includes relationships between tables in database.",
      },
      { id: "spanish", desc: "" },
    ],
    technologies: [
      "CSS",
      "HTML",
      "PostgreSQL",
      "ReactJs",
      "Redux",
      "Sequelize",
    ],
  },
  {
    id: 2,
    name: "Football Central",
    links: [
      {
        name: "github",
        url: "https://github.com/stars/OMassano/lists/football-central-app",
      },
      { name: "youtube", url: "https://www.youtube.com/watch?v=QOisVx6Y5Ic" },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Football App that includes authentication, searchbar, combined filters, sorting options, shopping cart, automatic mailing system, admin dashboard and more. Main tasks were creating endpoints, the database and incorporating Cloudinary and Nodemailer to both the front end and back end among others",
      },
      { id: "spanish", desc: "" },
    ],
    technologies: [
      "Cloudinary",
      "NodeJs",
      "PostgreSQL",
      "ReactJs",
      "Redux",
      "Sequelize",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    links: [
      {
        name: "github",
        url: "https://github.com/OMassano/Portfolio",
      },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Portfolio with landing page, about, projects and contact section. Ability to send notes to admin and download resume directly from site.",
      },
      { id: "spanish", desc: "" },
    ],
    technologies: ["ReactJs", "Redux", "Tailwind CSS"],
  },
];

// returns in order, newest id first
const projects = projectsList.sort((a, b) => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
});

export default projects;
