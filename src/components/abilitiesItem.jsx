import React, { Component } from 'react'

export default class AbilitiesItem extends Component {
	render() { return (

		<div className="col-md-3 text-center animate-box">
			<div className="services color-5">
				{
					this.props.text
				}
			</div>
		</div>
	)
	}
}



