import React from 'react';
import './Server.css';

function Server() {
	return (
		<div className="add-server">
			<div className="server-contain">
				<h2>add server</h2>
				<div className="form">
					<form onSubmit={() => console.log('Submitted')}>
						<div className="name in">
							<label htmlFor="name">Server Name</label>
							<input type="text" id="name" name="name" />
						</div>
						<div className="address in">
							<label htmlFor="address">IP Address</label>
							<input type="text" id="address" name="address" />
						</div>
						<div className="button">
							<div className="done">Done</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Server;
