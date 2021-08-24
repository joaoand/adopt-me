import {Component} from "react";

class Carousel extends Component {
    state = {
        active: 0
    }
    // Si el padre no trae propiedades se setea esta imagen 
    static defaultProps = { 
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }
    // Evento que escucha cuando se haga click sobre una imagen 

    handleIndexClick = (event) =>{
        this.setState({
            active: +event.target.dataset.index
        })
    }
    render (){
        const {active} = this.state;
        const {images} = this.props;
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {images.map((photo, index)=>(
                        <img 
                            key={photo}
                            src={photo}
                            data-index={index}
                            onClick={this.handleIndexClick}
                            className={index=== active? "active" : ""}
                            alt="animal thumbnail" />
                    ))}
                </div>
            </div>
        )

    }
}

export default Carousel;