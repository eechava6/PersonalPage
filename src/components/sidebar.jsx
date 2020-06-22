import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/sidebar.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Esteban Echavarría</a></h1>
              <span className="email"><i className="icon-mail"></i> esteban.ec123@gmail.com </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home"><i className="icon-home" /> Introduction</a></li>
                  <li><a href="#about" data-nav-section="about"><i className="icon-user" /> About</a></li>
                  <li><a href="#about" data-nav-section="about"><i className="icon-git" /> Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline" ><i className="icon-clipboard3" /> Timeline </a></li>
                </ul>

              </div>
            </nav>

            <div className="colorlib-footer">

              <a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/> </a>
              <a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> </a>

              <p><small>
                  Thanks <a href="https://dbarochiya.github.io/me/" target="_blank" rel="noopener noreferrer">Dhruv</a> for inspiration
              </small></p>

            </div>
          </aside>
        </div>
      </div>
    )
  }
}
