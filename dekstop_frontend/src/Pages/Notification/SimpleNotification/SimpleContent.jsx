import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './SimpleContent.module.css'

function SimpleNotificationContent({notes}) {
    const [readMore, setReadMore] = useState(false);

    SimpleNotificationContent.propTypes = {
		notes: PropTypes.string.isRequired
	};
	return (
		<p className={style.pnote}>
			{readMore ? notes : `${notes.substring(0, 100)}`}
			{notes.length >
				notes.substring(0, 100).length && (
				<button
					type="button"
					className={style.readMore}
					onClick={() => setReadMore(!readMore)}
				>
					{readMore ? '...Show Less' : '...Read More'}
				</button>
			)}
		</p>
	);
}

export default SimpleNotificationContent;
