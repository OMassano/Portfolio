const projectsList = [
  {
    id: "projectDog",
    name: "Dogs project",
    links: [
      {
        name: "github",
        url: "https://github.com/OMassano/Individual-Project",
      },
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
    id: "projectFootball",
    name: "Football Central",
    links: [
      {
        name: "github",
        url: "https://github.com/stars/OMassano/lists/football-central-app",
      },
      { name: "youtube", url: "https://www.youtube.com/watch?v=QOisVx6Y5Ic" },
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
    id: "projectPortfolio",
    name: "Portfolio",
    links: [
      {
        name: "github",
        url: "https://github.com/OMassano/Portfolio",
      },
    ],
    technologies: ["ReactJs", "Tailwind CSS"],
  },
];

// returns in order, newest id first
const projects = projectsList.sort((a, b) => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
});

export default projects;
