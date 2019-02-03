import React from 'react';
class Header extends React.Component {

  render() {
    return (
      <div className="fixedHeaderContainer">
        <div className="headerWrapper wrapper">
          <header>
            <a href="/">
              <img className="logo" src="./src/images/logo.svg" alt="Home"/>
              <h2 className="headerTitleWithLogo">Amuos</h2>
            </a>
            <div className="navigationWrapper navigationSlider">
              <nav className="slidingNav">
                <ul className="nav-site nav-site-internal">
                  <li className=""><a href="./music.html" target="_self">Music</a>
                  </li>
                  <li className=""><a href="./movie.html" target="_self">Movie</a>
                  </li>
                  <li className=""><a href="./Book" target="_self">Book</a>
                  </li>
                  <li className="navSearchWrapper reactNavSearchWrapper">
                    <input type="text" id="search_input_react" placeholder="Search" title="Search"/>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;