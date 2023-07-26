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
      { id: "english", desc: "" },
      { id: "spanish", desc: "" },
    ],
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
      { id: "english", desc: "" },
      { id: "spanish", desc: "" },
    ],
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
