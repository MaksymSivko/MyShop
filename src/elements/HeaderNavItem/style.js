import styled from 'styled-components';

export const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    ::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 60px;
      left: -1px;
      top: -10px;
    }
    a {
      color: ${({ theme }) => theme.color.colorError};
    }
  }
`;

export const NavItemTitle = styled.a`
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.colorDark};
  font-family: BasisGrotesquePro-Bold;
  font-size: 13px;
  text-transform: uppercase;
  transition: all 0.5s ease;
`;
