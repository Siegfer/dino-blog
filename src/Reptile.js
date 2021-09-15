import React from 'react'
import Comment from './Comment.js'

const Reptile = (props) => {
	let allComments = props.comments.map((c, i) => {
		return <Comment key={i} body={c} />
	})
	return (
		<div>
			<h1> {props.title}</h1>
			<p>{props.author}</p>
			<p>{props.body}</p>
			<h2> {props.comments[2]}</h2>
			{allComments}
		</div>
	)
}

export default Reptile
