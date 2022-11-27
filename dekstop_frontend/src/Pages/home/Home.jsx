<<<<<<< HEAD
import React from 'react';
import Sidenav from '../../components/SideNav/SideNav';
=======
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import Sidenav from '../../Components/SideNav/SideNav';
// import Sidenav from '../../components/SideNav/SideNav';
>>>>>>> 4ff5c033e5507f914e24f8779341b5075d53d6ca
import homeStyle from './Home.module.css';

function Home() {

	return (
		<div className={homeStyle.HomeWrapper}>
			<Sidenav />

			<div className={homeStyle.dashboardContainer}>
				<div className={homeStyle.dashboardContent}>
					<div className={homeStyle.dashboardContentOne}>
          <h1 className={homeStyle.dashBTitle}>hng server</h1>
            
                <div className={homeStyle.dashboardBorder}>
                <div className={homeStyle.dashboardContentOneDetails}>
                <h2 className={homeStyle.dashboardContentOneDetailsTitle}>
                  End point:
                </h2>
                <p className={homeStyle.dashboardContentOneDetailsText}>
                  server-devops/18.20.31.10
                </p>
              </div>
              <div className={homeStyle.dashboardContentOneDetails}>
                <h2 className={homeStyle.dashboardContentOneDetailsTitle}>
                  IP Address:
                </h2>
                <p className={homeStyle.dashboardContentOneDetailsText}>
                  192.168.0.1
                </p>
              </div>
              <div className={homeStyle.dashboardContentOneDetails}>
                <h2 className={homeStyle.dashboardContentOneDetailsTitle}>
                  Server health:
                </h2>
                <button
                  className={homeStyle.dashboardContentOneDetailsText}
                  type="button"
                  id={homeStyle.dashboardContentOneDetailsBtn}
                >
                  Excellent
                </button>
              </div>
          </div>

					</div>

					<div className={homeStyle.dashboardContentOne}>
          <h1 className={homeStyle.dashBTitle}>hng server</h1>
          <div className={homeStyle.dashboardBorder}>
          <div className={homeStyle.dashboardContentOneDetails}>
							<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
								End point:
							</h2>
							<p className={homeStyle.dashboardContentOneDetailsText}>
								server-devops/18.20.31.10
							</p>
						</div>
						<div className={homeStyle.dashboardContentOneDetails}>
							<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
								IP Address:
							</h2>
							<p className={homeStyle.dashboardContentOneDetailsText}>
								192.168.0.1
							</p>
						</div>
						<div className={homeStyle.dashboardContentOneDetails}>
							<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
								Server health:
							</h2>
              <button
								className={homeStyle.dashboardContentOneDetailsText}
								type="button"
								id={homeStyle.dashboardContentOneDetailsBtnTwo}
							>
								critical
							</button>
						</div>
          </div>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
