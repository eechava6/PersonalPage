import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>I'm a Computer Science Engineer graduted in 2020 from EAFIT, I'm passionate about technology and
                            how to use it to improve improve everyone's live, I consider myself
                            as a curious and perceptive guy trying to do something big with my work.
                            I try to keep up with trends in cross-cutting areas such as science,
                            technology, finance, economics, gastronomy.</p>
                    </div>
                </div>
                    <p><a className="col-md-3 btn btn-primary btn-learn" href="https://drive.google.com/file/d/1BpNF56PyvCZsFiLzOctMc6N4HNpmOfKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my Resume! <i className="icon-download4" /></a></p>
                    <p><a className="col-md-3 btn btn-primary btn-learn" href="https://drive.google.com/file/d/1BpNF56PyvCZsFiLzOctMc6N4HNpmOfKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my GitHub! <i className="icon-github" /></a></p>
                    <p><a className="col-md-3 btn btn-primary btn-learn" href="https://drive.google.com/file/d/1BpNF56PyvCZsFiLzOctMc6N4HNpmOfKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my LinkedIn! <i className="icon-linkedin2" /></a></p>

                </div>
            </div>
            </div>
        </div>
        </section>
    )
  }
}
