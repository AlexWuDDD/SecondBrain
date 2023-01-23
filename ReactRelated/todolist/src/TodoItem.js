import { Fragment } from "react";

function TodoItem(props) {

  const {content, index, handleItemDelete} = props;

  const handleClick = ()=>{
    handleItemDelete(index);
  }

  return (
    <Fragment>
      <div
        onClick={handleClick}
      >
        {content}
      </div>
    </Fragment>
  )
}
export default TodoItem;
