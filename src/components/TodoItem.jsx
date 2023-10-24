import React from "react";
import {AiFillCheckCircle} from 'react-icons/ai';
import {IoTrashOutline} from 'react-icons/io5';
import {FiEdit3} from 'react-icons/fi';
import {useDispatch} from 'react-redux';
import { checkDone } from "../redux/actions";

function TodoItem(props) {

  const dispatch = useDispatch();
  return (
    <div className="task-Item" style={props.isDone ? {backgroundColor:"yellow"}: {}}>
      <h2>{props.title}</h2>
      <div className="only-icons">
        <FiEdit3 className="icon" size={25} />
        <IoTrashOutline className="icon" size={30} />
        <AiFillCheckCircle className="icon" size={30} onClick={()=>{dispatch(checkDone());}} />
      </div>
    </div>
  );
}

export default TodoItem;
