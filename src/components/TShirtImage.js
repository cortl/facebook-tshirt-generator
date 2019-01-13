import React from "react"
import tshirt from '../../static/tshirt.png'
import { Image } from 'react-konva'

export default class TShirtImage extends React.Component {
    state = {
        image: null
    };

    componentDidMount() {
        const image = new window.Image();
        image.src = tshirt;
        image.onload = () => {
            this.setState({
                image: image
            });
        };
    }

    render() {
        return <Image {...this.props} image={this.state.image} />;
    }
}