import ReactSlider from 'react-slider';

import styled from '@emotion/styled';

export const StartPageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.813rem;
  color: #423f45;

  button {
    border: none;
    outline: none;
  }

  & > img {
    z-index: 0;
  }
`;

export const StartPageForm = styled.div`
  position: relative;
  width: 43.75rem;
  margin: 0 auto;
  border-radius: 2.5rem;
  background: linear-gradient(198.41deg, #7f75f0 -41.27%, #101f32 97.44%);
  padding: 1.25rem;
  z-index: 1;

  & > div {
    border-radius: 1.438rem;
    background: #ffffff;
    padding: 2.188rem 0;
  }

  p {
    text-align: center;
    font-size: 2rem;
    line-height: 2.75rem;
    margin-bottom: 2.875rem;
  }
`;

export const PlacesBlock = styled.div`
  margin-bottom: 3.375rem;

  & > div {
    max-width: 22.875rem;
  }
`;

export const ValuesBlock = styled.div`
  margin-bottom: 4.563rem;

  & > div {
    max-width: 33.125rem;

    span {
      &:nth-child(n + 3) {
        padding-left: 0;
      }
    }
  }
`;

export const StyledSlider = styled(ReactSlider)`
  height: 1.438rem;
  margin: 0 auto;

  span {
    position: absolute;
    top: -1.875rem;
    padding-left: 0.313rem;
  }
`;

export const StyledThumb = styled.div`
  height: 1.438rem;
  width: 1.438rem;
  text-align: center;
  background-color: #104987;
  outline: none;
  color: transparent;
  border-radius: 50%;
  cursor: grab;
`;

export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: #ffd748;
  border-radius: 60rem;
`;

export const ModeButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
  margin-bottom: 6rem;
`;

export const ModeBtn = styled.button`
  padding: 0.313rem 1.313rem 0.5rem;
  border-radius: 3.125rem;
  color: rgba(66, 63, 69, 0.56);
  background-color: rgba(255, 215, 72, 0.56);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &.active {
    color: rgba(66, 63, 69, 1);
    background-color: rgba(255, 215, 72, 1);
  }
`;

export const PlayButton = styled.button`
  display: block;
  padding: 0.75rem 4.813rem 1rem;
  background-color: #38df7a;
  box-shadow: 0 0.25rem 0.313rem rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
  transition: background-color 0.2s ease-in-out;
  width: 16.25rem;
  color: #fff;
  margin: 0 auto;

  &:hover {
    background-color: #4ec57e;
  }
`;
