import Link from 'next/link';
import React from 'react';
import { NavItem, NavItemTitle } from './style';

export const HeaderNavItem = ({ list }) => {
  return (
    <>
      {list.map(({ title, url }) => (
        <NavItem key={`nav-item-key-${title}`}>
          <Link href={url}>
            <NavItemTitle>
              <span>{title}</span>
            </NavItemTitle>
          </Link>
        </NavItem>
      ))}
    </>
  );
};
