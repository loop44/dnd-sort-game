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

  & > div:nth-of-type(even) {
    align-self: flex-end;
  }

  & > div {
    width: 131px;
    height: 131px;
    outline: none;

    > img {
      width: 131px;
      height: 131px;
    }
  }
`;

export const Dock = styled.div`
  flex-grow: 0;
  height: 223px;
  width: 890px;
  position: relative;

  & > img {
    z-index: 2;
  }

  & > div {
    width: 670px;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 110px;

    > div {
      width: 131px;
      height: 131px;
      background-color: rgba(0, 0, 0, 0.06);
      box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      transition: background-color 0.2s ease-in-out;

      img {
        transition: all 0.3s ease-in-out;
        width: 131px;
        height: 131px;
      }
    }
  }
`;
