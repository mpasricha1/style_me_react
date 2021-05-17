import React from "react";
import "./style.css";

export function DropdownList(props) {
  return <select className="dropdownList" {...props} />;
}

export function Options(props) {
  return <option {...props} />;
}
