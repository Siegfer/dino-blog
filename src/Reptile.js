import React from 'react'
import Comment from './Comment.js'

const Reptile = (props) => {
	let allComments = props.comments.map((c, i) => {
		return <Comment key={i} body={c.comment} username={c.username} />
	})
	return (
		<div className='Dino'>
			<h1> {props.title}</h1>
			<p>{props.author}</p>
			<p>{props.body}</p>
			<div className='com'>
				<h3>Comments: </h3>
				{allComments}
			</div>
		</div>
	)
}

export default Reptile
