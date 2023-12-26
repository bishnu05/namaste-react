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

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img
            src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
            alt="Logo"
          />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">Submit</button>
        </div>
        <div className="right">
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="User Icon"
          />
        </div>
      </header>
    </>
  );
};
