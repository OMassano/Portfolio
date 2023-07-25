const technologyStack = [
  { id: 1, name: "Node.Js" },
  { id: 2, name: "Express.Js" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "React" },
  { id: 5, name: "Redux" },
  { id: 6, name: "HTML5" },
  { id: 7, name: "CSS" },
  { id: 8, name: "PostgreSQL" },
  { id: 9, name: "Sequelize" },
  { id: 10, name: "Rest API" },
  { id: 11, name: "Nodemailer" },
  { id: 12, name: "Cloudinary" },
  { id: 13, name: "Github" },
  { id: 14, name: "Slack" },
  { id: 15, name: "VS Code" },
  { id: 16, name: "Python" },
];

const technologies = technologyStack.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(technologies);
export default technologies;
