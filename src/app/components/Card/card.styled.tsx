'use client'
import styled from "styled-components";

export const CardWrapper = styled.div`
height: 500px; 
width: 100%; 
box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
border-radius: 10px; 
display: flex; 
flex-direction: column;
&:hover img {
transform: scale(1.2);
transition: .5s ease; 
}
margin-bottom: 30px;
@media (min-width: 1200px) {
    margin-bottom: 45px; 
}
`

export const CardImage = styled.div`
height: 225px; 
border-radius: 10px 10px 0 0;
position: relative; 
overflow: hidden; 
img {
border-radius: 10px 10px 0 0;
transition: .5s ease; 
object-position: top;
}
`

export const CardContent = styled.div`
height: 275px;
border-radius: 0 0 10px 10px; 
padding: 24px; 
display: flex;
flex-direction: column;
justify-content: space-between; 
`

export const CardFlex = styled.div`
display: flex; 
flex-wrap: wrap; 
`