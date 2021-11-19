import React from "react";
import "./ListItem.css";
import Button from "../Button/Button";

const ListItem = ({ toDoName, remove }) => {
    return (
        <div className="item">
            <div className="todolist-text">
                <div className="todo-item">
                    {toDoName}
                </div>
            </div>
            <Button
                name='Удалить'
                onClick={() => remove(toDoName)}
                customClass="item-btn" />
        </div>
    )
}

export default ListItem;