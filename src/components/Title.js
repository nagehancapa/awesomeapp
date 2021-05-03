import React from "react"
import "./Title.css"

export default function Title(props) {
	return (
		<div className="Title">
			<h2>{props.title}</h2>
			<h1>{props.description}</h1>
		</div>
	)
}