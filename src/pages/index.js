import React from "react"
import TShirtGenerator from '../components/TShirtGenerator.js'
import { graphql } from "gatsby";

import '../styles/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const HomePage = ({ data }) => (
    <div className='app container'>
        <div className='col-md-10 offset-1 text-center'>
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
        <TShirtGenerator 
            occupations={data.allDataJson.edges.find(edge => edge.node.title === 'Occupations').node.values}
            adjectives={data.allDataJson.edges.find(edge => edge.node.title === 'Adjectives')}
        />
    </div>)

export const query = graphql`
 query HomePageQuery {
     site {
        siteMetadata {
            title
        }
    },
    allDataJson {
      edges {
        node {
          title
          values
        },
      }
    }
 }
`

export default HomePage