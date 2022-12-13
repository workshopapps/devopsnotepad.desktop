/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/order */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import circle from './images/circle.png';
import man from './images/man.png';
import { BsArrowRightShort } from 'react-icons/bs';
import womanwhite from './images/womanwhite.png';
import womanblack from './images/womanblack.png';
import classes from './About.module.css';

function About ()  {
	return (
		<div className={classes.container}>
			<div className={classes.banner}>
				<h1>We’re changing the whole DevOps system.</h1>
				<div className={classes.btnbox}>
					<button className={classes.btn1}>Get started</button>{' '}
					<button className={classes.btn2}>
						View-blog
						<BsArrowRightShort />
					</button>
				</div>
			</div>
			<div className={classes.flexrow}>
				<div className={classes.flexcol}>
					<p className={classes.storyhead}>OUR STORY</p>
					<p
						className={classes.p_}
						style={{ maxWidth: '345px', fontWeight: '300', lineHeight: '40px' }}
					>
						We are building the DevOp notepad exclusively for the devops
						engineers. Tool for every engineer,
					</p>
					<div
						className={classes.flexrow}
						style={{
							marginTop: '20px',
							paddingLeft: '0px',
							flexWrap: 'nowrap',
						}}
					>
						<img src={circle} className={classes.circle} alt="img" />
						<p className={classes.tool}>
							A tool for managing and keeping track of servers, remembering
							passwords for various tools used to access these servers.
						</p>
					</div>
				</div>
				<div className={classes.flexcol} style={{ maxWidth: '400px' }}>
					<ol className={classes.list_style__}>
						<li className={classes.list__} style={{ 'padding-left': '25px' }}>
							<b style={{ fontSize: '20px', fontWeight: '800' }}>
								4 months of intense research
							</b>
							<br />A tool for managing and keeping track of servers,
							remembering pas
						</li>
						<li className={classes.list__} style={{ 'padding-left': '25px' }}>
							<b style={{ fontSize: '20px', fontWeight: '800' }}>
								4 months of intense research{' '}
							</b>
							<br />A tool for managing and keeping track of servers,
							remembering pas
						</li>
						<li className={classes.list__} style={{ 'padding-left': '25px' }}>
							<b style={{ fontSize: '20px', fontWeight: '800' }}>
								{' '}
								4 months of intense research{' '}
							</b>
							<br />A tool for managing and keeping track of servers,
							remembering pas
						</li>
					</ol>
				</div>
			</div>
			<div className={classes.flexrow}>
				<div className={classes.hide}>
					<img src={man} className={classes.imgsize} alt="img" />
				</div>
				<div className={classes.flexcol} style={{ maxWidth: '540px' }}>
					<p className={classes.storyhead2}>Our Mission</p>
					<p style={{ paddingBottom: '35px' }} className={classes.p_}>
						We are building the DevOp notepad exclusively for the devops
						engineers A tool for managing and keeping track of servers,
						remembering passwords for various tools used to access these
						servers.share information, and work together.
					</p>
					<div
						className={classes.flexrow}
						style={{
							maxWidth: '400px',
							paddingLeft: '0px',
							justifyContent: 'space-between',
						}}
					>
						<p style={{ fontSize: '30px', fontWeght: '700' }}>76%</p>
						<p style={{ fontSize: '30px', fontWeght: '700' }}>50M+</p>
						<p style={{ fontSize: '30px', fontWeght: '700' }}>5K+</p>{' '}
					</div>
				</div>
				<div className={classes.show}>
					<img src={man} className={classes.imgsize} alt="img" />
				</div>
			</div>
			<div className={classes.flexrow}>
				<div>
					<img src={womanwhite} className={classes.imgsize} alt="img" />
				</div>
				<div className={classes.flexcol} style={{ maxWidth: '540px' }}>
					<p className={classes.storyhead2}>Our Vision</p>
					<p className={classes.p_}>
						We believe that the developers world will look very different after
						the building of this tool.
					</p>
					<p className={classes.p_}>
						We foresee a gingantic acceleration towards the essential
						requirements of developers satisfaction in a safe, secure, and
						effective way of proper management.
					</p>
				</div>
			</div>
			<div className={classes.bluerow}>
				<div className={classes.colorbgsm}>
					<img src={womanblack} className={classes.imgsize} alt="img" />
				</div>
				<div className={classes.flexcol}>
					<p
						style={{
							fontSize: '24px',
							maxWidth: '253px',
							fontWeight: '600',
							lineHeight: '16px',
							color: '#f6e6c7',
							paddingBottom: '25px',
						}}
					>
						Have a question?
					</p>
					<p className={classes.assist}>Our team is happy to assist you</p>
					<p
						style={{
							fontSize: '20px',
							maxWidth: '491px',
							fontWeight: '400',
							lineHeight: '33px',
							color: '#ffffff',
							paddingBottom: '68px',
						}}
					>
						Ask about DevOps Notepad, blogs, or anything else. Our highly
						trained developers are standing by, ready to help.{' '}
					</p>
					<hr style={{ color: '#fcf7ed', maxWidth: '540px' }} />
					<button className={classes.btn3}>Contact us</button>
				</div>
				<div className={classes.colorbglg}>
					<img src={womanblack} className={classes.imgsize} alt="img" />
				</div>
			</div>
		</div>
	);
};


export default About;