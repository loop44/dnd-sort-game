import styled from '@emotion/styled';

export const GamePageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  & > img {
    z-index: 0;
  }
`;

export const GamePageInner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 980px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const Playground = styled.div`
  padding-top: 133px;
  padding-bottom: 133px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Dock = styled.div`
  flex-grow: 0;
  height: 223px;
  width: 890px;
  position: relative;

  & > img {
    z-index: 2;
  }
`;
