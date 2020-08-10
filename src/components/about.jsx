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
                        <p>I'm a Computer Science Engineer graduated in 2020 from EAFIT, I'm passionate about technology and
                            how to use it to improve improve everyone's life, I consider myself
                            as a curious and perceptive guy trying to do something big with my work.
                            I try to keep up with trends in cross-cutting areas such as science,
                            technology, finance, economics, gastronomy.
                        </p>

                        <p>Outside my technical skills, I consider myself as a nice man who always try
                            not to only resolve my problems but others, I think that my main strength is that I don't give
                            up easily, when I want something I go ahead for that
                            and I chase it until I achieve it </p>

                        <b>Some of my hobbies are: </b>
                        <ul>
                            <li>Watch YouTube videos about CS, Science, Gastronomy and Videogames.</li>
                            <li>Go to the gym and play rugby sometimes.</li>
                            <li>Be with my family and girlfriend</li>
                            <li>Read about finances and investing</li>
                            <li>Programming</li>
                            <li>Learn new things</li>
                        </ul>
                    </div>
                </div >
                    <div className="row justify-content-center">
                    </div>
                    <div className="form-row text-center">
                        <div className="col-12">
                            <a className="btn-primary btn  btn-learn" href="https://drive.google.com/file/d/1BpNF56PyvCZsFiLzOctMc6N4HNpmOfKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my Resume! <i className="icon-download4" /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
  }
}
