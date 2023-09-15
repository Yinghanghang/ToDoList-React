import React, { useState } from "react";

function CustomItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleItemClick() {
    setIsCompleted(prevValue => !prevValue);
  }

  return (
    <div onClick={handleItemClick}>
      <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {props.task}
      </li>
    </div>
  );
}

export default CustomItem;
