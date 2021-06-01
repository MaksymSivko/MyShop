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

  @media (max-width: 374px) {
    padding: 0 20px;
  }
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

  .icon-menu,
  .icon-cart {
    font-size: 23px;
    color: ${({ theme }) => theme.color.colorDark};
  }

  &.btn-cart {
    margin-left: 24px;
    position: relative;

    @media (max-width: 374px) {
      margin-left: 15px;
    }

    &.-active {
      .icon-cart {
        color: #000;
      }
    }
  }
`;

export const ControlBtnQuantity = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: BasisGrotesquePro-Bold;
  color: ${({ theme }) => theme.color.colorWhite};
  background: ${({ theme }) => theme.color.colorDark};
  font-size: 13px;
  top: 12px;
  left: 11px;
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

  @media (max-width: 1024px) {
    display: none;
    visibility: hidden;
  }
`;

export const ConntrolLenguage = styled.div`
  position: relative;

  &:hover {
    ::before {
      position: absolute;
      content: '';
      width: 90px;
      height: 60px;
      left: -25px;
      top: -10px;
      cursor: pointer;
    }

    .lenguage-list {
      border-top: 1px solid ${({ theme }) => theme.color.colorDark};
      height: max-content;
      padding: 12px 26px;
    }
  }
`;

export const LenguageBtn = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
`;

export const LenguageActive = styled.div`
  font-family: BasisGrotesquePro-Bold;
  color: ${({ theme }) => theme.color.colorDark};
  font-size: 13px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const LenguageList = styled.div`
  transition: 0.5s;
  position: absolute;
  cursor: pointer;
  background: ${({ theme }) => theme.color.colorMainBackground};
  flex-direction: column;
  padding: 0px 26px;
  /* border-top: 1px solid ${({ theme }) => theme.color.colorDark}; */
  z-index: -1;
  left: -25px;
  top: 48px;
  display: flex;
  overflow: hidden;
  height: 0;
`;

export const LenguageListItem = styled.a`
  cursor: pointer;
  font-family: BasisGrotesquePro-Bold;
  color: ${({ theme }) => theme.color.colorGrayLight};
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &.-active,
  &:hover {
    color: ${({ theme }) => theme.color.colorDark};
  }
`;
