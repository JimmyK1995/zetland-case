'use client'
import styled from "styled-components";

export const NavWrapper = styled.div`
width: 100%; 
display: flex; 
height: 94px; 
align-items: center;
a {
    height: 100%;
    display: flex;
    align-items: center;
}
img {
    height: calc(100% - 48px); 
    width: auto;
    width: fit-content;
    border-radius: 10px;
    object-fit: contain;

}
`