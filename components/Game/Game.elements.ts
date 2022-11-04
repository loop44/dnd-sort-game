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

  max-width: 61.25rem;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.875rem;
`;

export const Playground = styled.div`
  padding-top: 8.313rem;
  padding-bottom: 8.313rem;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div:nth-of-type(even) {
    align-self: flex-end;
  }

  & > div {
    width: 8.188rem;
    height: 8.188rem;
    outline: none;
    position: relative;

    > img {
      width: 8.188rem;
      height: 8.188rem;
    }
  }
`;

export const Dock = styled.div`
  flex-grow: 0;
  height: 13.938rem;
  width: 55.625rem;
  position: relative;

  & > img {
    z-index: 2;
  }

  & > div {
    width: 41.875rem;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 6.875rem;

    > div {
      width: 8.188rem;
      height: 8.188rem;
      background-color: rgba(0, 0, 0, 0.06);
      box-shadow: inset 0px 0.25rem 1.563rem rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      transition: background-color 0.2s ease-in-out;

      img {
        transition: all 0.3s ease-in-out;
        width: 8.188rem;
        height: 8.188rem;
      }
    }
  }
`;

export const DraggableItemValue = styled.span`
  display: block;
  font-size: 3.5rem;
  line-height: 4.25rem;
  letter-spacing: 0.125rem;
  color: #fff;

  position: relative;
  top: -5.313rem;
  left: 2.188rem;

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
      padding: 1.438rem 3.75rem 1.875rem;

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
          top: -6.25rem;
          left: -7.5rem;
          transform: scale(0.8);
        }
        &:nth-of-type(2) {
          top: 22rem;
          left: -7.5rem;
        }
        &:nth-of-type(3) {
          top: 4.438rem;
          left: 31.375rem;
        }
        &:nth-of-type(4) {
          top: 21.938rem;
          left: 31.25rem;
          transform: scale(0.8);
        }
      }

      h1 {
        text-align: center;
        font-size: 8rem;
        line-height: 10.188rem;

        color: #ffed88;
        text-shadow: 0px 0px 0.625rem rgba(30, 129, 58, 1);

        margin-bottom: 1.375rem;
      }

      p {
        text-align: center;
        font-size: 2.5rem;
        line-height: 3.188rem;
        color: #5f40a1;
        margin-bottom: 4.563rem;
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
        font-size: 2rem;
        line-height: 2.75rem;

        color: #ffffff;

        margin: 0 auto;

        &:hover {
          background-color: #4ec57e;
        }
      }
    }
  }
`;

interface HintProps {
  asc: boolean;
}

export const Hint = styled.div<HintProps>`
  align-self: ${(props) => (props.asc ? 'flex-start' : 'flex-end')};
  font-size: 2.25rem;
  line-height: 2.75rem;
  color: #fff;
  position: relative;

  padding: 1.25rem 3.75rem;

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

  & > img {
    z-index: 4;
    transform: ${(props) => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  & > div {
    position: relative;
    z-index: 5;
  }
`;
