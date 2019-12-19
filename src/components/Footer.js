import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/cellardoor.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
		<div className="container footer">

				<div className="navbar-brand">
					<a href="/" className="navbar-item" title="Logo">
						<img src={logo} alt="NZ Cellar Door" />
					</a>

			<a className="footer-item" href="/">
				Home
			</a>
			<a className="footer-item" href="/contact">
				Contact Us
			</a>
			<a className="footer-item" href="/terms">
				Terms &amp; Conditions
			</a>
			</div>


			<div className="row">
				<div className="col">
					<small>&copy; 2018 NZ Cellar Door</small>
				</div>
			</div>
		</div>
      </footer>
    )
  }
}

export default Footer
