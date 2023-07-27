import technologies from "../technologyStack";

const projectsList = [
  {
    id: 1,
    name: "Dogs project",
    links: [
      {
        name: "github",
        link: "https://github.com/OMassano/Individual-Project",
      },
      { name: "youtube", link: "" },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      { id: "spanish", desc: "" },
    ],
    technologies:["ReactJs"]
  },
  {
    id: 2,
    name: "Football Central",
    links: [
      {
        name: "github",
        link: "https://github.com/stars/OMassano/lists/football-central-app",
      },
      { name: "youtube", link: "https://www.youtube.com/watch?v=QOisVx6Y5Ic" },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      { id: "spanish", desc: "" },
    ],
    technologies:["ReactJs"]
  },
  {
    id: 3,
    name: "Portfolio",
    links: [
      {
        name: "github",
        link: "https://github.com/OMassano/Portfolio",
      },
      { name: "youtube", link: "" },
    ],
    descriptions: [
      {
        id: "english",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      { id: "spanish", desc: "" },
    ],
    technologies:["ReactJs", "Tailwind CSS"]
  },
];

// returns in order, newest id first
const projects = projectsList.sort((a, b) => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
});
console.log(projects[0].links[0].link);

export default projects;
