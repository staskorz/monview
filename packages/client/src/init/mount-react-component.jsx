import React from 'react'
import ReactDOM from 'react-dom'

export default (Component, target) => {
	const targetElement = document.getElementById(target)
	ReactDOM.render(<Component />, targetElement)
}
