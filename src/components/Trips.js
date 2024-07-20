import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Button } from './Button'
import { ImLocation } from 'react-icons/im'

const Trips = ({ heading }) => {
    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                    edges {
                    node {
                        alt
                        button
                        name
                        img {
                        childImageSharp {
                            gatsbyImageData
                        }
                        }
                    }
    }
  }
        }
    `)

    function getTrips(data) {
        const trips = [];
        data.allTripsJson.edges.forEach((item, index) => {
            trips.push(
                <ProductCard key={index}>
                    <ProductImg image={item.node.img.childImageSharp.gatsbyImageData} alt={item.node.alt} />
                    <ProductsInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductsTitle>{item.node.name}</ProductsTitle>
                        </TextWrap>
                        <Button
                            to="/trips"
                            primary="true"
                            round="ture"
                            css={`
                            position: absolute;
                            top: 420px; font-size: 14px;
                            `}>
                            {item.node.button}</Button>
                    </ProductsInfo>
                </ProductCard>
            );
        });
        return trips;
    }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {getTrips(data)}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
    
`

const ProductsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
}
`

const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
`
const ProductImg = styled(GatsbyImage)`
   height: 100%;
   max-width: 100%;
   position: relative;
   border-radius: 10px;
   filter: brightness(70%);
   transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

   &:hover {
       filter: brightness(100%);
   }
`

const ProductsInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 280px) {
        padding: 0;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ProductsTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`



