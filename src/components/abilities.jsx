import React, { Component } from 'react'
import AbilitiesItem from "./abilitiesItem";

export default class Abilities extends Component {
	render() { return (
		<section className="colorlib-abilities" data-section="abilities">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">What do I know?</span>
						<h2 className="colorlib-heading">I have experience in:</h2>
					</div>
				</div>
				<div className="row row-pt-md">
					<AbilitiesItem text="Microservices"/>
					<AbilitiesItem text="Data Structures & Algorithms"/>
					<AbilitiesItem text="Dev Ops"/>
					<AbilitiesItem text="Typescript"/>
					<AbilitiesItem text="Architecture design"/>
					<AbilitiesItem text="Remote work"/>
					<AbilitiesItem text="Linux"/>
					<AbilitiesItem text="SQL/NoSQL"/>
					<AbilitiesItem text="Cloud Computing"/>
					<AbilitiesItem text="Nodejs"/>
					<AbilitiesItem text="AWS"/>
					<AbilitiesItem text="Research"/>
					<AbilitiesItem text="Python"/>
					<AbilitiesItem text="Team work"/>
					<AbilitiesItem text="Git - Github"/>
					<AbilitiesItem text="Javascript"/>
				</div>

			</div>
		</section>
	)
	}
}



