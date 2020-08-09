import React, { Component } from 'react'

export default class TimelineItem extends Component {
	render() { return (

		<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
			<div className="timeline-entry-inner">
				<div className="timeline-icon color-1">
					<i className="icon-arrow-right3" />
				</div>
				<div className="timeline-label">
					<h2> {this.props.role } - <b>{this.props.company }</b> <span>{this.props.date}</span></h2>
				</div>
			</div>
		</article>
		)
	}
}



