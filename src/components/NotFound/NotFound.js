import React from 'react';
import { useRouter } from 'next/router';

import {
  NotFoundContainer,
  NotFoundWrapp,
  NotFoundSubTitle,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundBtnWrap,
  NotFoundBtn,
} from './style';

export default function NotFound() {
  const router = useRouter();
  return (
    <NotFoundContainer>
      <NotFoundWrapp>
        <NotFoundSubTitle>404</NotFoundSubTitle>

        <NotFoundTitle>
          {/* <AnimationBlock
              title="Ой, такої сторінки не існує"
              title2="Oops, we can’t find this page"
            /> */}
        </NotFoundTitle>

        <NotFoundDesc>
          Не хвилюйтесь Просто щось пішло не так, поверніться на попередню
          сторінку
        </NotFoundDesc>

        <NotFoundBtnWrap>
          <NotFoundBtn onClick={() => router.back()}>назад</NotFoundBtn>
        </NotFoundBtnWrap>
      </NotFoundWrapp>
    </NotFoundContainer>
  );
}
