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
    return <Text x={85} y={110} fontSize={19} align='center' width={200} text={phrase}/>
}

const TShirtGenerator = ({occupations, adjectives}) => {
    return (
        <div>
            <div className='row'>
                <Stage className='mx-auto' width={380} height={390}>
                    <Layer>
                        {getPhrase(occupations, adjectives)}
                        {<Text x={170} y={270} fontSize={30} text={RandomEmoji.random({count: 1})[0].character}/>}
                    </Layer>
                    <Layer>
                        <TShirtImage x={-15} />
                    </Layer>
                </Stage>
            </div>
            <div className='row'>
                <button className='mx-auto' onClick={() => window.location.reload()}>Generate!</button>
            </div>
        </div>);
}

export default TShirtGenerator