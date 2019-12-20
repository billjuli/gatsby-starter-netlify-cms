import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/cellardoor.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link target="_self" to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="NZ Cellar Door" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a target="_self" className="navbar-item" to="/">
                Home2
              </a>
              <a className="navbar-item" 
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/new-zealand-wine-regions";
                      }}>
                NZ Wine Regions4
              </a>
              <Link target="_self" className="navbar-item" to="/">
                Wine Map
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>

            </div>
            <div className="navbar-end has-text-centered">
              <Link target="_self" className="navbar-item" to="/pricing">
                List with us
              </Link>
              <Link target="_self" className="navbar-item" to="/session/register">
                Sign up
              </Link>
              <Link target="_self" className="navbar-item" to="/session/login">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
