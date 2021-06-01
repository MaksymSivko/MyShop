import React from 'react';
import Link from 'next/link';
import { Icon } from 'elements/Icon/Icon';

import {
  HeaderContainer,
  HeaderBasement,
  HeaderConntrol,
  ControlBtn,
  LogoConntrol,
  HeaderNavList,
} from './style';
import { HeaderNavItem } from 'elements/HeaderNavItem/HeaderNavItem';

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
            {/* onClick={openSidebarMenu}*/}
            <Icon name="menu" />
          </ControlBtn>
          <LogoConntrol>
            {
              <Link href={'/'}>
                <a>
                  <img src="image/logo.svg" alt="Logo" />
                </a>
              </Link>
            }
          </LogoConntrol>
        </HeaderConntrol>
        <HeaderNavList>
          <HeaderNavItem list={category} />

          {/* {menu &&
              menu.length != 0 &&
              menu
                .slice(0)
                .reverse()
                .map((e: any, index: number) => {
                  return (
                    <HeaderNavItem
                      data={e}
                      list={e.sub_categories}
                      key={index}
                    />
                  );
                })} */}
        </HeaderNavList>
        <div className="header__control">
          <div className="control__language">
            <div className="language__btn">
              <div className="language__active">language__active</div>
              {/* <div className="language__active">{router.locale}</div> */}
              {/* <Icon name="down" /> */}
            </div>
            <div className="language__list">
              {/* {router.locales?.map((loc: any, i: any) => (
                  <Link
                    key={`language__list-item-key-${i}`}
                    href={currentUrl}
                    locale={loc}
                  >
                    <a
                      className={`language__list-item ${
                        loc === router.locale ? '-active' : ''
                      } `}
                    >
                      {loc}
                    </a>
                  </Link>
                ))} */}
              language__list
            </div>
          </div>
          <div
            className="control__btn btn-cart"
            // onClick={() => (quantity != null ? router.push('/cart') : {})}
          >
            {/* {quantity !== null ? ( */}
            <>
              {/* <div className="btn-cart__quantity">{quantity}</div> */}
              <div className="btn-cart__quantity">quantity</div>
              {/* <Icon name="cart-black" /> */}
            </>
            {/* ) : (
                <Icon name="cart" />
              )} */}
          </div>
        </div>
      </HeaderContainer>
      <HeaderBasement />
    </>
  );
}
