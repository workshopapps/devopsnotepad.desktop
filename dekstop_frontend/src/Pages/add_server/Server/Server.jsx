import React from 'react';
import './Server.css';
import style from "./Server.module.css"

function Server({handleSubmit}) {
	return (
		<div className={style.add_server}>
			<div className={style.server_contain}>
				<h2>add server</h2>
				<div className={style.form}>
					<form onSubmit={() => console.log('Submitted')}>
						<div className={style.in}>
							<label htmlFor="name">Server Name</label>
							<input type="text" id="name" name="name" />
						</div>
						<div className={style.in}>
							<label htmlFor="address">IP Address</label>
							<input type="text" id="address" name="address" />
						</div>
						<div className={style.button} onClick={handleSubmit} style={{cursor: "pointer"}}>
							<div className={style.done}>Done</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Server;
