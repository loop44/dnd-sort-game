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
    position: relative;

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

export const DraggableItemValue = styled.span`
  display: block;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 2px;
  color: #fff;

  position: relative;
  top: -85px;
  left: 35px;

  text-shadow: rgb(36, 37, 70) 3px 0px 0px, rgb(36, 37, 70) 2.83487px 0.981584px 0px,
    rgb(36, 37, 70) 2.35766px 1.85511px 0px, rgb(36, 37, 70) 1.62091px 2.52441px 0px,
    rgb(36, 37, 70) 0.705713px 2.91581px 0px, rgb(36, 37, 70) -0.287171px 2.98622px 0px,
    rgb(36, 37, 70) -1.24844px 2.72789px 0px, rgb(36, 37, 70) -2.07227px 2.16926px 0px,
    rgb(36, 37, 70) -2.66798px 1.37182px 0px, rgb(36, 37, 70) -2.96998px 0.42336px 0px,
    rgb(36, 37, 70) -2.94502px -0.571704px 0px, rgb(36, 37, 70) -2.59586px -1.50383px 0px,
    rgb(36, 37, 70) -1.96093px -2.27041px 0px, rgb(36, 37, 70) -1.11013px -2.78704px 0px,
    rgb(36, 37, 70) -0.137119px -2.99686px 0px, rgb(36, 37, 70) 0.850987px -2.87677px 0px,
    rgb(36, 37, 70) 1.74541px -2.43999px 0px, rgb(36, 37, 70) 2.44769px -1.73459px 0px,
    rgb(36, 37, 70) 2.88051px -0.838247px 0px;
`;

interface ResultProps {
  active: boolean;
}

export const Result = styled.div<ResultProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  background-color: ${(props) => (props.active ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  color: #fff;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background: linear-gradient(198.41deg, #67df89 -41.27%, rgba(141, 103, 233, 0) 97.44%);
    padding: 1.25rem;
    border-radius: 2.5rem;

    > div {
      position: relative;
      border-radius: 1.438rem;
      max-width: 621px;
      background-color: #fff;
      padding: 23px 60px 30px;

      &.lose {
        h1 {
          color: #ff7a7a;
        }
      }

      &.win {
        h1 {
          color: #ff7a7a;
        }
      }

      img {
        position: absolute;

        &:nth-of-type(1) {
          top: -100px;
          left: -120px;
          transform: scale(0.8);
        }
        &:nth-of-type(2) {
          top: 352px;
          left: -120px;
        }
        &:nth-of-type(3) {
          top: 71px;
          left: 502px;
        }
        &:nth-of-type(4) {
          top: 351px;
          left: 500px;
          transform: scale(0.8);
        }
      }

      h1 {
        text-align: center;
        font-size: 128px;
        line-height: 163px;

        color: #ffed88;
        text-shadow: 0px 0px 10px rgba(30, 129, 58, 1);

        margin-bottom: 22px;
      }

      p {
        text-align: center;
        font-size: 40px;
        line-height: 51px;
        color: #5f40a1;
        margin-bottom: 73px;
      }

      button {
        border: none;
        outline: none;
        cursor: pointer;

        display: block;
        padding: 0.75rem 4.813rem 1rem;
        background-color: #38df7a;
        box-shadow: 0 0.25rem 0.313rem rgba(0, 0, 0, 0.1);
        border-radius: 1.25rem;
        transition: background-color 0.2s ease-in-out;
        width: 16.25rem;
        font-size: 32px;
        line-height: 44px;

        color: #ffffff;

        margin: 0 auto;

        &:hover {
          background-color: #4ec57e;
        }
      }
    }
  }
`;
