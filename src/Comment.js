import React from 'react'
import Toast from 'react-bootstrap/Toast'

const Comment = (props) => {
	return (
		<>
			<Toast style={{ margin: '0 auto' }}>
				<Toast.Header>
					<img
						src='https://ca.slack-edge.com/T0351JZQ0-U029RRSV17V-3141c8089fbf-512'
						style={{ height: '40px', width: '40px' }}
						className='rounded me-2'
						alt=''
					/>
					<strong className='me-auto'>{props.username}</strong>
					<small>11 mins ago</small>
				</Toast.Header>
				<Toast.Body>{props.body}.</Toast.Body>
			</Toast>
		</>
	)
}

export default Comment
