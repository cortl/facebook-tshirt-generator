import React from "react"
import { generatePhrase } from '../utils/phrase-generator'
import { Stage, Layer, Text } from 'react-konva';
import RandomEmoji from 'random-emoji'
import TShirtImage from './TShirtImage'

const getItemFrom = list => list[Math.floor(Math.random()*list.length)]

const getPhrase = (occupations, adjectives) => {
    const phrase = generatePhrase({
        occupation: getItemFrom(occupations),
        adjective: getItemFrom(adjectives)
    });
    return <Text x={100} y={110} fontSize={19} align='center' width={200} text={phrase}/>
}

const TShirtGenerator = ({occupations, adjectives}) => {
    return (
        <div className='col-md-10 offset-1 text-center'>
            <div className='row'>
                <Stage className='mx-auto' width={380} height={390}>
                    <Layer>
                        {getPhrase(occupations, adjectives)}
                        {<Text x={170} y={250} fontSize={30} text={RandomEmoji.random({count: 1})[0].character}/>}
                    </Layer>
                    <Layer>
                        <TShirtImage />
                    </Layer>
                </Stage>
            </div>
        </div>);
}

export default TShirtGenerator