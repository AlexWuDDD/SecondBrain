import { Fragment } from "react";
import PropTypes from 'prop-types';

function TodoItem(props) {

  const {test, content, index, handleItemDelete} = props;

  const handleClick = ()=>{
    handleItemDelete(index);
  }

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
  index: PropTypes.number.isRequired,
  handleItemDelete: PropTypes.func,
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;
