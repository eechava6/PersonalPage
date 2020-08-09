import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
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
                    <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1BpNF56PyvCZsFiLzOctMc6N4HNpmOfKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>

                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I know?</span>
                <h2 className="colorlib-heading">My main abilities are:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                    Microservices
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                    Data Structures & Algorithms
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                    Dev Ops
                </div>
            </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-5">
                        Architecture design
                    </div>
                </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                    Communication
                </div>
            </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-5">
                        Cloud Computing
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-5">
                        Research
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-5">
                        Team work
                    </div>
                </div>
            </div>

        </div>
        </section>
      </div>
    )
  }
}
