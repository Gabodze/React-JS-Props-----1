import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Components/component';

function Alert(props){
  return(
    <React.Fragment>
      
      <Component name="მარიამ გაბოძე" ></Component>
    </React.Fragment>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Alert></Alert>)
