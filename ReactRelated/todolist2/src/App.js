import React, {Fragment, useState} from 'react'
import './style.css'

export default function App() {

  const [show, setShow] = useState(true);

  const handleToggle = ()=>{
    setShow(!show);
  }

  return (
    <Fragment>
      <div className={show ? 'show': 'hide'}>App</div>
      <button onClick={handleToggle}>toggle</button>
    </Fragment>
  )
}
