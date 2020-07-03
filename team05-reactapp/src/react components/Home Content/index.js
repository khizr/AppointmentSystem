import React from "react";
import "./styles.css";
import Image from "./../Home Content/static/healthcare.jpg";
import Image2 from "./../Home Content/static/clinics.jpg";
import Image3 from "./../Home Content/static/patients.jpg";

const image_array = [Image,
                     Image2, 
                     Image3]

let image_index = 0;
// let test = 1;

/* The HomeContent Component */
class HomeContent extends React.Component {

  state = {
      image: image_array[image_index]
  }

  handleInputChange = () => {
    image_index += 1;

    if (image_index === 3) {
        image_index = 0;
    }

    this.setState({
        image: image_array[image_index] // [name] sets the object property name to the value of the `name` variable.
      });
  };

  componentDidMount() {
    setInterval(this.handleInputChange, 4000);
  }

  render() {
    return (
      <div className="home_content"
           onClick={this.handleInputChange} 
           style={ {backgroundImage: "url(" + this.state.image + ")"} }>
      </div>
    );
  }
}

export default HomeContent;