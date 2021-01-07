import React, { Component } from 'react'
import TimelineItem from "./timelineItem";

export default class Timeline extends Component {
  render() {
    return (
          <div className="colorlib-narrow-content">
            <section className="colorlib-experience" data-section="timeline">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">

                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <TimelineItem role="SSR CloudOps Engineer" company="Globant" date ="Dec 2020-Present"/>
                  <TimelineItem role="Sr Serverless Developer (AWS/Nodejs)" company="Intergrupo" date ="Aug 2020-Dec 2020" color="4"/>
                  <TimelineItem role="Microservices / NodeJs Developer" company="Talenta365" date ="Mar 2020-Aug"/>
                  <TimelineItem role="Bachelor in Computer Science" company="EAFIT" date ="Jul 2020" color="4"/>
                  <TimelineItem role="Internship – Innovation Architecture" company="Bancolombia" date ="Apr 2019- Jan 2020"/>
                  <TimelineItem role="Architecting on AWS - Cloud practitioner essentials" company="AWS" date ="Nov 2019" color="4"/>
                  <TimelineItem role="Jr. Research Assistant" company="EAFIT" date ="Jul 2018 - Jul 2019"/>
                  <TimelineItem role="Big data specialization 3/5 courses" company="Coursera" date ="Dec 2018" color="4"/>
                  <TimelineItem role="Full stack developer" company="Freelance" date ="Jul 2017 - Jul 2018"/>
                </div>
              </div>
            </div>
          </section>
          </div>
    )
  }
}
