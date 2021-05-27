import React from 'react';
import {
  AnimationBlockWar,
  AnimationBlockContainer,
  AnimationBlockItem,
} from './style';

export default function AnimationBlock({ firstTitle, secondTitle }) {
  return (
    <AnimationBlockWar>
      <AnimationBlockContainer>
        <AnimationBlockItem>{firstTitle}</AnimationBlockItem>
        <AnimationBlockItem>{secondTitle}</AnimationBlockItem>
      </AnimationBlockContainer>
    </AnimationBlockWar>
  );
}
