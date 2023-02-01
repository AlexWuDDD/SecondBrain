import React, { Fragment } from "react";
import PropTypes from 'prop-types';

// shouldComponentUpdate() replacement
// function areEqual(pervProps, nextProps){
//   return (pervProps.content === nextProps.content);
// }

function TodoItem(props) {

  const {test, content, index, handleItemDelete} = props;

  const handleClick = ()=>{
    handleItemDelete(index)
  };

  // console.log("child render");
  return (
    <Fragment>
      <div
        onClick={handleClick}
      >
        {test} - {content}
      </div>
    </Fragment>
  )
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  handleItemDelete: PropTypes.func,
}

TodoItem.defaultProps = {
  test: 'hello world'
}

// export default React.memo(TodoItem, areEqual);
export default TodoItem;
