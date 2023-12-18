/*
<div id="parent">
<div id="child">
<h1></h1>
</div>
</div>
*/
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome to React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// connsole.log(heading); //object

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I'm a an h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm a an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "I'm a an h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm a an h2 tag"),
  ]),
]);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

