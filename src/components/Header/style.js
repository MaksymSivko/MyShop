import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color.colorMainBackground};
  text-align: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 36px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBasement = styled.div`
  height: 80px;
`;

export const HeaderConntrol = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlBtn = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  .icon-menu {
    font-size: 23px;
    color: ${({ theme }) => theme.color.colorDark};
  }
`;

export const LogoConntrol = styled.div`
  width: 110px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderNavList = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
`;
