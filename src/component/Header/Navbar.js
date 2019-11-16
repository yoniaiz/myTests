import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { urls } from "../../constants";
export const Navbar = (props) => {
  // array ref  dynamically to evry link add
  const myRefs = useRef([]);
  //urls constant obj to array for furure map
  const urlsArr = Object.values(urls);
  console.log(props.main)
  if(props.main){
    myRefs.current.forEach((ref, i) => {
      ref.classList.remove("current-page");
    });
  }
  const addCurrentClass = index => {
    //dynamically add and remove classes on link click
    myRefs.current.forEach((ref, i) => {
      ref.classList.remove("current-page");
      if (i === index ) ref.classList.add("current-page");
    });
    props.routeToMain(false)
  };
  return (
    <nav>
      <ul className="nav-list">
        {urlsArr.map((url, index) => {
          return (
            <li className="nav-list-item" key={index}>
              <Link
                className={`nav-list-item-link`}
                to={`/${url}`}
                ref={el => (myRefs.current[index] = el)}
                onClick={() => addCurrentClass(index)}
              >
                {url}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
