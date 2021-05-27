import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundWrapp = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundSubTitle = styled.div`
  font-size: ${({ theme }) => theme.font_size.fs_h1};
  line-height: ${({ theme }) => theme.line_height.lh_h1};
  margin-bottom: 16px;
`;

export const NotFoundTitle = styled.div`
  width: 100%;
`;

export const NotFoundDesc = styled.div`
  width: 100%;
  max-width: 300px;
  font-family: Neue-Machina-Regular;
  color: ${({ theme }) => theme.color.colorGray};
  font-size: ${({ theme }) => theme.font_size.fs_h5};
  line-height: ${({ theme }) => theme.line_height.lh_h5};
  margin-bottom: 36px;
  text-align: center;
`;

export const NotFoundBtnWrap = styled.div`
  width: 100%;
  max-width: 215px;
`;

export const NotFoundBtn = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 13px;
  font-family: BasisGrotesquePro-Bold;
  padding: 16px;
  text-align: center;
  transition: all 0.5s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  border-radius: 3px;

  background: ${({ theme }) => theme.color.colorDark};
  color: ${({ theme }) => theme.color.colorWhite};

  &:hover {
    background: ${({ theme }) => theme.color.colorError};
  }
`;
