import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
const ContainerUp = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const ContainerDown = styled.div`
  display: flex;
  gap: 20px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 1rem;
  &:hover{
    cursor: pointer;
  }
`;

export const SlideShow = () => {
    const [imgSrc, setImgSrc] = useState('https://picsum.photos/id/237/200/300')
    const handleClick = (e) => {
        setImgSrc(e.target.src)
    }
  return (
    <div>
        <Container>
            <ContainerUp>
                <Img src={imgSrc} alt="up-img" />
            </ContainerUp>
            <ContainerDown>
            <Img onClick={(e) => handleClick(e)} src="https://picsum.photos/id/237/200/300" alt="down-img" />
            <Img onClick={(e) => handleClick(e)} src="https://picsum.photos/200/300" alt="down-img" />
            <Img onClick={(e) => handleClick(e)} src="https://picsum.photos/200/300?grayscale" alt="down-img" />
            </ContainerDown>
        </Container>
    </div>
  )
  
}


