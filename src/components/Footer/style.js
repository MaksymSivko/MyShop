import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  /* margin-top: auto; */
  padding: 40px 0 0;
  text-align: center;
  background: ${({ theme }) => theme.color.colorMainBackground};
`;

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    max-width: 1090px;
  }

  @media (max-width: 768px) {
    max-width: 752px;
  }
`;

export const FooterLogo = styled.div`
  width: 100%;
  max-width: 175px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterNavList = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const FooterNavItem = styled.a`
  font-family: Neue-Machina-Regular;
  color: ${({ theme }) => theme.color.colorDark};
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  @media (max-width: 1023px) {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FooterUnderline = styled.div`
  width: 100%;
  max-width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.colorLight};
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 525px) {
    flex-wrap: wrap;
  }
`;

export const UnderlineItem = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.colorGrayLight};
  a {
    color: ${({ theme }) => theme.color.colorGrayLight};
  }
  @media (max-width: 525px) {
    order: 2;
  }
`;

export const UnderlineSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  @media (max-width: 525px) {
    width: 100%;
    margin: 0;
    margin-bottom: 30px;
    justify-content: space-between;
    order: 1;
  }
`;

export const SocialLink = styled.a`
  font-family: Neue-Machina-Regular;
  color: ${({ theme }) => theme.color.colorDark};
  font-size: 16px;
  line-height: 24px;
  margin-left: 48px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
