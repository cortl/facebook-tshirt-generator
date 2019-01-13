import { graphql } from "gatsby";
import React from "react";
import { Helmet } from 'react-helmet';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TShirtGenerator from '../components/TShirtGenerator.js';
import '../styles/main.css';


const HomePage = ({ data }) => (
    <div className='app container-fluid'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Facebook T-Shirt Generator</title>
        </Helmet>
        <div className='text-center'>
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
        <TShirtGenerator
            occupations={data.allDataJson.edges.find(edge => edge.node.title === 'Occupations').node.values}
            adjectives={data.allDataJson.edges.find(edge => edge.node.title === 'Adjectives').node.values}
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