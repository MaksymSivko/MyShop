import React from 'react';
import Link from 'next/link';
import {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  FooterNavList,
  FooterNavItem,
  FooterUnderline,
  UnderlineItem,
  UnderlineSocial,
  SocialLink,
} from './style';

const data = [
  { title: 'Про нас', link: '/about' },
  { title: 'Каталог', link: '/catalog' },
  { title: 'Доставка та оплата', link: '/delivery' },
  { title: 'Обмен и возврат', link: '/exchange' },
  { title: 'Блог', link: '/blog' },
  { title: 'Контакти', link: '/contacts' },
];

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLogo>
          <Link href={'/'}>
            <a>
              <img src="image/logo.svg" alt="Logo" />
            </a>
          </Link>
        </FooterLogo>
        <FooterNavList>
          {data.map((e, indx) => {
            return (
              <Link href={e.link} key={`item-key-${indx}`}>
                <FooterNavItem key={`item-key-${indx}`}>
                  {e.title}
                </FooterNavItem>
              </Link>
            );
          })}
        </FooterNavList>
        <FooterUnderline>
          <UnderlineItem>
            <span>© 2020 Only good</span>
          </UnderlineItem>

          <UnderlineSocial>
            <Link href={'/Facebook'}>
              <SocialLink key="1">Facebook</SocialLink>
            </Link>

            <Link href={'/Instagram'}>
              <SocialLink key="2">Instagram</SocialLink>
            </Link>
          </UnderlineSocial>
          <UnderlineItem>
            <Link href="/#123">
              <a>By Me</a>
            </Link>
          </UnderlineItem>
        </FooterUnderline>
      </FooterWrap>
    </FooterContainer>
  );
};
