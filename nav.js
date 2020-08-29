'use strict';

const e = React.createElement;

class NavContainer extends React.Component {

  render() {
    <nav class="tnav">
    <div class="logo">The Giving Tree</div>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a>
            <ul id="submenu">
                <li><a href="#">Mission & Philosophy</a></li>
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">General Information</a></li>
            </ul>
        </li>
        <li><a href="#">Programs</a>
            <ul id="submenu">
                <li><a href="#">Baby Bears</a></li>
                <li><a href="#">Lil' Bears</a></li>
                <li><a href="#">Honey Bears</a></li>
                <li><a href="#">Chubby Cheetahs</a></li>
                <li><a href="#">Lil' Tigers</a></li>
                <li><a href="#">Lil' Lions</a></li>
                <li><a href="#">Lil' Zebras</a></li>
                <hr />
                <li><a href="#">Pre-K</a></li>
                <li><a href="#">Before & After School</a></li>
            </ul>
        </li>

        <li><a href="#">Extracurriculars</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
  }
}

const domContainer = document.querySelector('#nav_container');
ReactDOM.render(e(NavContainer), domContainer);