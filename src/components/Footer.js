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
					<Link to="/" target="_self" className="navbar-item" title="Logo">
						<img src={logo} alt="NZ Cellar Door" />
					</Link>

			<a className="footer-item" 
							onClick={e => {
									e.preventDefault()
									window.location.href = "/";
							}}>
				Home
			</a>
			<a className="footer-item" 
							onClick={e => {
									e.preventDefault()
									window.location.href = "/contact";
							}}>
			Contact Us
			</a>
			<a className="footer-item" 
							onClick={e => {
									e.preventDefault()
									window.location.href = "/terms";
							}}>
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
