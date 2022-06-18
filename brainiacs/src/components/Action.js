import React, { Component } from 'react'
import {FaDownload} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'
import luca from '../assets/luca.png'
import brave from '../assets/brave.jpeg'
import jleague from '../assets/jl.jpeg'
import morbius from '../assets/morbius.jpeg'
import st from '../assets/st.jpeg'
import nightmare from '../assets/nightmare.jpg'
import './styles.css'
class Action extends Component {
  render() {
    return (
      <div className='mainone'>
        <div className='comedy-title'>
          <h1>Action</h1>
        </div>
          <div className='comedy-container'>

          <div className='comedy'>
                  <img src={luca} alt='movie-image'></img>
                  <div className='comedy-intro'>
                      <div className='comedy-name'>
                        <h2>Luca</h2>
                        <h5>2022</h5>
                      </div>

                      <div className='comedy-rate'>
                        <h3>Netflix Presents</h3>
                        <FaDownload color='rgb(250, 20, 103)' fontSize= "1em"/> <span className='rate'><FaRegStar color='rgb(238, 194, 111)'/><p>9.5</p></span>
                      </div>
                  </div>
              </div>

              <div className='comedy'>
                  <img src= {brave}alt='movie-image'></img>
                  <div className='comedy-intro'>
                      <div className='comedy-name'>
                        <h2> Merida </h2>
                        <h5>2022</h5>
                      </div>

                      <div className='comedy-rate'>
                        <h3>Netflix Presents</h3>
                        <FaDownload color='rgb(250, 20, 103)' fontSize= "1em"/> <span className='rate'><FaRegStar color='rgb(238, 194, 111)'/><p>9.5</p></span>
                      </div>
                  </div>
              </div>

              <div className='comedy'>
                  <img src={jleague}></img>
                  <div className='comedy-intro'>
                      <div className='comedy-name'>
                        <h2>Justice</h2>
                        <h5>2022</h5>
                      </div>

                      <div className='comedy-rate'>
                        <h3>Netflix Presents</h3>
                        <FaDownload color='rgb(250, 20, 103)' fontSize= "1em"/> <span className='rate'><FaRegStar color='rgb(238, 194, 111)'/><p>9.5</p></span>
                      </div>
                  </div>
              </div>

              <div className='comedy'>
                  <img src={st} alt='movie-image'></img>
                  <div className='comedy-intro'>
                      <div className='comedy-name'>
                        <h2>Stranger</h2>
                        <h5>2022</h5>
                      </div>

                      <div className='comedy-rate'>
                        <h3>Netflix Presents</h3>
                        <FaDownload color='rgb(250, 20, 103)' fontSize= "1em"/> <span className='rate'><FaRegStar color='rgb(238, 194, 111)'/><p>9.5</p></span>
                      </div>
                  </div>

              </div>

              <div className='comedy'>
                  <img src={morbius} alt='movie-image'></img>
                  <div className='comedy-intro'>
                      <div className='comedy-name'>
                        <h2>Morbius</h2>
                        <h5>2022</h5>
                      </div>

                      <div className='comedy-rate'>
                        <h3>Netflix Presents</h3>
                        <FaDownload color='rgb(250, 20, 103)' fontSize= "1em"/> <span className='rate'><FaRegStar color='rgb(238, 194, 111)'/><p>9.5</p></span>
                      </div>
                  </div>

              </div>

          </div>

      </div>
    )
  }
}

export default Action