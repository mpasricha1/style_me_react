import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function ListContainer(props) {
  return <div className="listContainer" {...props}></div>;
}

export function UnorderedList(props) {
  return <ul className="unorderedList" {...props}></ul>;
}

export function ListElement(props) {
  return <li className="liElement" {...props}>
  </li>;
}
export function ImgTag(props) {
    return <img className="imgTag" {...props}/>;
  }