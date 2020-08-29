'use strict';

const e = React.createElement;

class Navigation extends React.Component {

    render() {
      return e(

      <p>Hello</p> <a href="#">Link</a>

      );
    }
}
  

  ReactDOM.render( 
    <Navigation />, 
    document.getElementById('navcontain') 
  );