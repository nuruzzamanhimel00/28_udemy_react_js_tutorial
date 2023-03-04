import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background: #262626;
    width: 100%;
    height: 100vh;
`;

export const H1 = styled.h1`
     color: #fff;
`;
export const P = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: #aaa;
    margin: 20px 0;
`;
export const Image = styled.img`
    position: absolute;
  top: 30px;
  right: -20px;
  z-index: 0;
`;