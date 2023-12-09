'use client'
import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 600px; 
border-radius: 10px; 
position: relative; 
@media (min-width: 992px) {
    height: 550px; 
}
@media (min-width: 1600px) {
    height: 650px; 
}
img {
    border-radius: 10px; 
    z-index: -2;
}
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%; 
    height: 15px; 
    border-radius: 0 0 10px 10px; 
    background-color: #FF3508;
}
&::before {
    content: '';
    position: absolute; 
    bottom: 0;
    left: 0; 
    height: 100%; 
    width: 100%; 
    background-color: #FF3508;
    z-index: -1; 
    border-radius: 10px; 
    opacity: 0.6; 
    transition: .5s ease;

    @media (min-width: 992px) {
        opacity: 0.3; 
        transition: .5s ease;
    }
}
`

export const HeaderContainer = styled.div`
margin: 0 30px; 
position: relative; 
height: 100%; 
display: flex; 
flex-direction: column;
justify-content: flex-end;
@media (min-width: 992px) {
    margin: 0 100px; 
}
@media (min-width: 1600px) {
    margin: 0 150px; 
}
`

export const HeaderContent = styled.div`
margin-bottom: 100px;
@media (min-width: 568px) {
    max-width: 65%; 
}
@media (min-width: 992px) {
    max-width: 50%; 
    margin-bottom: 75px;
}
`

export const ArticleScore = styled.div`
position: absolute; 
bottom: 40px;
right: 10px;
font-size: 14px;
font-weight: 500; 
color: white;
font-family: 'Poppins', sans-serif;
&::after {
    content: '';
    position: absolute;
    height: 2px; 
    width: 200%; 
    background-color: white; 
    bottom: -5px;
    right: -10px;
    @media (min-width: 992px) {
        width: 400px; 
    }
}
`

export const FeaturedArticle = styled.div`
position: absolute; 
top: 40px;
left: 10px;
font-size: 14px;
font-weight: 500; 
color: white;
font-family: 'Poppins', sans-serif;
&::after {
    content: '';
    position: absolute;
    height: 1px; 
    width: 200%; 
    background-color: white; 
    bottom: -5px;
    left: -10px;
    @media (min-width: 992px) {
        width: 400px; 
        height: 2px; 
    }
}
`