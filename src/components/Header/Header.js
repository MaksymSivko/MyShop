import React from 'react';
import Link from 'next/link';
import { Icon } from 'elements/Icon/Icon';
import { HeaderNavItem } from 'elements/HeaderNavItem/HeaderNavItem';

import {
  HeaderContainer,
  HeaderBasement,
  HeaderConntrol,
  ControlBtn,
  LogoConntrol,
  HeaderNavList,
  ConntrolLenguage,
  LenguageBtn,
  LenguageActive,
  LenguageList,
  LenguageListItem,
  ControlBtnQuantity,
} from './style';

const category = [
  {
    title: 'ювелирные украшения',
    url: '/#1',
  },
  {
    title: 'бижутерия',
    url: '/#2',
  },
  {
    title: 'бренды',
    url: '/#3',
  },
  {
    title: 'контакты',
    url: '/#4',
  },
];

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderConntrol>
          <ControlBtn>
            <Icon name="menu" />
          </ControlBtn>
          <LogoConntrol>
            <Link href={'/'}>
              <a>
                <img src="image/logo.svg" alt="Logo" />
              </a>
            </Link>
          </LogoConntrol>
        </HeaderConntrol>
        <HeaderNavList>
          <HeaderNavItem list={category} />
        </HeaderNavList>
        <HeaderConntrol>
          <ConntrolLenguage>
            <LenguageBtn>
              <LenguageActive>ru</LenguageActive>
              <Icon name="down" />
            </LenguageBtn>
            <LenguageList className="lenguage-list">
              <Link href="/#">
                <LenguageListItem className=" -active">ru</LenguageListItem>
              </Link>
              <Link href="/#">
                <LenguageListItem>ua</LenguageListItem>
              </Link>
              <Link href="/#">
                <LenguageListItem>us</LenguageListItem>
              </Link>
            </LenguageList>
          </ConntrolLenguage>
          <ControlBtn className="btn-cart">
            {/* <ControlBtnQuantity>2</ControlBtnQuantity> */}
            <Icon name="cart" />
          </ControlBtn>
        </HeaderConntrol>
      </HeaderContainer>
      <HeaderBasement />
    </>
  );
}
