import React, {Fragment, useRef, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import './style.css';
import './style2.css'

export default function App() {

  const [show, setShow] = useState(true);
  const [list, setList] = useState([]);
  const nodeRef = useRef(null);

  const handleToggle = ()=>{
    console.log("change show to " + !show);
    setShow(!show);
  }

  const handleAddItem = ()=>{
    setList([...list, 'item'])
  }

  return (
    <Fragment>
      {/* <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={1000} //动画执行多久 1s
        classNames='fade'
        unmountOnExit
        onEntered={() => {nodeRef.current.style.color = 'blue'}}
        appear={true}
      >
        <div ref={nodeRef}>App</div>
      </CSSTransition> */}
      <TransitionGroup>
      {
        list.map((item, index)=>{
          return (
            <CSSTransition
              key={index}
              nodeRef={nodeRef}
              timeout={1000} //动画执行多久 1s
              classNames='fade'
              unmountOnExit
              onEntered={() => {nodeRef.current.style.color = 'blue'}}
              appear={true}
            >
              <div ref={nodeRef} >{item}</div>
            </CSSTransition>

          )
        })
      }
      </TransitionGroup>
      <button onClick={handleAddItem} >toggle</button>
    </Fragment>
  )
}
