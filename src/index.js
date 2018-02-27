import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//num 3
function My() {
  return <span>My</span>;
}

function World() {
  return <span>World</span>;
}

function MyWorld() {
  return (
    <div>
      <My /> <World />
    </div>
  );
}

ReactDOM.render(<MyWorld />, document.querySelector("#root"));

//num 4

function Books() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-345678-910</li>
      </ul>
    </div>
  );
}

function Render() {
  return (
    <div>
      <Books />
    </div>
  );
}

ReactDOM.render(<Render />, document.querySelector("#root"));

// num 5

// function Books() {
//   return;
//   <div className="book">
//     <div className="title">The Title</div>
//     <div className="author">The Author</div>
//     <ul className="stats">
//       <li className="rating">5 stars</li>
//       <li className="isbn">12-345678-910</li>
//     </ul>
//   </div>;
// }
// ReactDOM.render(<Books />, document.getElementById("#root"));

// 1) create a react app called jsx-exercises
// 2) delete src/App.* src/index.css src/logo.svg (del src/App.*)
// 3) In the index.js file, create a basic component similar to our HelloWorld component, call it whatever you like, and render some text out to the DOM.
// 4) Create a component that renders this JSX.


  /* <div className="book">
  <div className="title">
    The Title
  </div>
  <div className="author">
    The Author
  </div>
  <ul className="stats">
    <li className="rating">
      5 stars
    </li>
    <li className="isbn">
      12-345678-910
    </li>
  </ul>
</div> */
}

// 5) Make a copy of the the component from exercise 4, and replace the JSX with calls to React.createElement(). The output should be indentical.

// 6) Return the appropiate JSX from the following component so that when username is undefined or null, it renders 'Not logged in'. When username is a string, render "Hello, username".

// function Greeting() {
//   // Try all of these variations
//   // var username = 'root';
//   // var username = undefined;
//   // var username = null;
//   // var username = false;
//   //
//   // Fill in the rest:
//   //
//   // return(...)
// }

// 5) Make a copy of the the component from exercise 4, and replace the JSX with calls to React.createElement(). The output should be indentical.

//num 5
function Books() {
  return React.createElement("div", { className: "book" }
//     <div className="book">
//       <div className="title">The Title</div>
//       <div className="author">The Author</div>
//       <ul className="stats">
//         <li className="rating">5 stars</li>
//         <li className="isbn">12-345678-910</li>
//       </ul>
//     </div>
//   );
}

function Render() {
  return (
    <div>
      <Books />
    </div>
  );
}
