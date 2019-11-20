import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { topics } from "../../constants";
export const Navbar = props => {
  // array ref  dynamically to evry link add
  const myRefs = useRef([]);
  //urls constant obj to array for furure map
  console.log(props.main);
  if (props.main) {
    myRefs.current.forEach((ref, i) => {
      ref.classList.remove("current-page");
    });
  }
  const addCurrentClass = index => {
    //dynamically add and remove classes on link click
    myRefs.current.forEach((ref, i) => {
      ref.classList.remove("current-page");
      if (i === index) ref.classList.add("current-page");
    });
    props.routeToMain(false);
  };
  return (
    <nav>
      <ul className="nav-list">
        {topics.map(({name, id},index) => {
          return (
            <li className="nav-list-item" key={id}>
              <Link
                className={`nav-list-item-link`}
                to={`/${id}`}
                ref={el => (myRefs.current[index] = el)}
                onClick={() => addCurrentClass(index)}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
