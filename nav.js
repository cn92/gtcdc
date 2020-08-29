import React from "react";
import ReactDom from "react-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";


class Navi extends React.Component {
    render() {
      return(

      <div><p>Hello</p> <a href="#">Link</a></div>

      )
    }
}
  

  ReactDOM.render(Navi, document.getElementById("navcontain"));