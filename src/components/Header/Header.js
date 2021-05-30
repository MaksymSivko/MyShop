import React from 'react';
import Link from 'next/link';

import {
  HeaderContainer,
  HeaderBasement,
  HeaderConntrol,
  ControlBtn,
  LogoConntrol,
} from './style';
import { Icon } from 'elements/Icon/Icon';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderConntrol>
          <ControlBtn className="menu-btn">
            {/* <div className="control__btn menu-btn" onClick={openSidebarMenu}> */}
            <Icon name="menu" />
          </ControlBtn>
          {/* <div className="control__logo">{renderLogo()}</div> */}
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
        <div className="header__nav-list">
          header__nav-list
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
          <div className="nav-item">
            <Link href={'/brands'}>
              <a className="nav-item__title">
                {/* <span>{st(`${router.locale}`, 'brands')}</span> */}
                <Icon name="down" />
                <span>1</span>
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href={'/contacts'}>
              <a className="nav-item__title">
                <span>2</span>
                {/* <span>{st(`${router.locale}`, 'contacts')}</span> */}
                <Icon name="down" />
              </a>
            </Link>
          </div>
        </div>
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
