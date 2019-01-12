import React from "react"
import tshirt from '../../static/tshirt.png'
import { Stage, Layer, Image, Text } from 'react-konva';
import { generatePhrase } from "../utils/phrase-generator";

class TShirtImage extends React.Component {
    state = {
        image: null
    };
    componentDidMount() {
        const image = new window.Image();
        image.src = tshirt;
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };
    }

    render() {
        return <Image image={this.state.image} />;
    }
}

export class TShirtGenerator extends React.Component {
    render() {
        return (
            <div className='col-md-10 offset-1 text-center'>
                <div className='row'>
                    <Stage className='mx-auto' width='380' height='390'>
                        <Layer>
                            <Text x={95} y={110} fontSize={19} align='center' text={generatePhrase()} />
                        </Layer>
                        <Layer>
                            <TShirtImage />
                        </Layer>
                    </Stage>
                </div>
            </div>);
    }
}