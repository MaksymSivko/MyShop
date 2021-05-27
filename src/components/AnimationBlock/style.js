import styled from 'styled-components';

export const AnimationBlockWar = styled.div`
  width: 100%;
  height: 190px;
  position: relative;
`;

export const AnimationBlockContainer = styled.div`
  font-family: sans-serif;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  filter: blur(0) contrast(1);
  animation: blur1 1s linear;

  &:hover {
    animation: blur2 1s linear;
    cursor: pointer;
  }

  &:hover > :nth-of-type(1) {
    opacity: 0;
  }

  &:hover > :nth-of-type(2) {
    opacity: 1;
  }
`;

export const AnimationBlockItem = styled.div`
  font-size: 70px;
  position: absolute;
  transition: opacity 1s linear;
  color: ${({ theme }) => theme.color.colorDark};
  font-family: Neue-Machina-Regular;

  & :nth-of-type(1) {
    opacity: 1;
  }

  & :nth-of-type(2) {
    opacity: 0;
  }
`;
