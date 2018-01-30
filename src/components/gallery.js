import React, {Component} from 'react';
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'
import gallery4 from './images/gallery4.jpg'
import gallery5 from './images/gallery5.jpg'
import gallery6 from './images/gallery6.jpg'
class Gallery extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render(){
    
    const landingBackground = {
      width: "100vw",
    }

    return (
      <div id="profile" className='container-fluid' style={landingBackground} >
      <div className="container" style={{padding:'7% 0'}}>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical is-parent">
            <div className="tile is-child box">
              <img src={gallery1} alt=''/>
              <p className="subtitle is-6"><em>It was first a bit challenging to start asking questions to strangers, but soon we ...</em></p>
              <p className="subtitle is-6"><em>16/09/2017</em></p>
            </div>
            <div className="tile is-child box">
              <img src={gallery2} alt=''/>
              <p className="subtitle is-6"><em>Great event, great team, great mentor. Sheeja, William, Kit, you are cool guys!</em></p>
              <p className="subtitle is-6"><em>17/09/2017</em></p>
            </div>
            <div className="tile is-child box">
              <img src={gallery3} alt=''/>
              <p className="subtitle is-6"><em>Jeremy gave a really fascinating talk about the possibilities of AI ...</em></p>
              <p className="subtitle is-6"><em>16/09/2017</em></p>
            </div>
          </div>
          <div className="tile is-6 is-vertical is-parent">
            <div className="tile is-child box">
              <img src={gallery4} alt=''/>
              <p className="subtitle is-6"><em>James is an awesome instructor, his knowledge in market research really...</em></p>
              <p className="subtitle is-6"><em>17/09/2017</em></p>
            </div>
            <div className="tile is-child box">
              <img src={gallery5} alt=''/>
              <p className="subtitle is-"><em>The final presentation judges came from Fung Capital, Horizon Venture...</em></p>
              <p className="subtitle is-6"><em>17/09/2017</em></p>
            </div>
            <div className="tile is-child box">
              <img src={gallery6} alt=''/>
              <p className="subtitle is-"><em>Lorem ipsum ...</em></p>
              <p className="subtitle is-6"><em>17/09/2017</em></p>
            </div>


          </div>
        </div>           
      </div>
      </div>
    )
  }
}

export default Gallery;
