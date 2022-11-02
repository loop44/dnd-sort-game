import Image from 'next/image';
import { useState } from 'react';

import bg from '../../public/static/assets/start-bg.png';

import {
  ModeBtn,
  ModeButtonsBlock,
  PlacesBlock,
  PlayButton,
  StartPageForm,
  StartPageWrapper,
  StyledSlider,
  StyledThumb,
  StyledTrack,
  ValuesBlock
} from './Start.elements';

// eslint-disable-next-line react/destructuring-assignment
const Thumb = (props: any, state: any) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;
// eslint-disable-next-line react/destructuring-assignment
const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

const PLACES_SCHEMA = {
  0: 2,
  1: 3,
  2: 4,
  3: 5
};

const VALUES_SCHEMA = {
  0: 'А',
  1: '9',
  2: '19',
  3: '50',
  4: '99',
  5: '999'
};

const Start: React.FC = () => {
  const [placeIndex, setPlaceIndex] = useState<number | readonly number[]>(0);
  const [valueIndex, setValueIndex] = useState<number | readonly number[]>(0);
  const [sort, setSortMode] = useState<number>(0);

  return (
    <StartPageWrapper>
      <Image className="bg" src={bg} alt="" fill placeholder="blur" />
      <StartPageForm>
        <div>
          <PlacesBlock>
            <p>Кол-во предметов:</p>
            <StyledSlider
              marks
              renderMark={(props) => (
                <span {...props}>
                  {PLACES_SCHEMA[Number(props.key) as keyof typeof PLACES_SCHEMA]}
                </span>
              )}
              min={0}
              max={3}
              renderTrack={Track}
              renderThumb={Thumb}
              value={placeIndex}
              onAfterChange={(idx) => setPlaceIndex(idx)}
            />
          </PlacesBlock>
          <ValuesBlock>
            <p>Значения:</p>
            <StyledSlider
              marks
              renderMark={(props) => (
                <span {...props}>
                  {VALUES_SCHEMA[Number(props.key) as keyof typeof VALUES_SCHEMA]}
                </span>
              )}
              min={0}
              max={5}
              renderTrack={Track}
              renderThumb={Thumb}
              value={valueIndex}
              onAfterChange={(idx) => setValueIndex(idx)}
            />
          </ValuesBlock>
          <ModeButtonsBlock>
            <ModeBtn className={sort === 0 ? 'active' : ''} onClick={() => setSortMode(0)}>
              По возрастанию
            </ModeBtn>
            <ModeBtn className={sort === 1 ? 'active' : ''} onClick={() => setSortMode(1)}>
              По убыванию
            </ModeBtn>
          </ModeButtonsBlock>
          <PlayButton>Играть</PlayButton>
        </div>
      </StartPageForm>
    </StartPageWrapper>
  );
};

export default Start;
