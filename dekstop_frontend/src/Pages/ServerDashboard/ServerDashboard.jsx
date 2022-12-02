import React from "react";
import ServerInfo from "../../Components/ServerInfo/ServerInfo"
import Sidenav from "../../Components/SideNav/SideNav";
import styles from "./ServerDashBoard.module.css"

function ServerDashBoard() {
    return (
        <div>

            <Sidenav />
            <section className={styles.main}>
				<ServerInfo /> </section>



        </div>

    )

}

export default ServerDashBoard;