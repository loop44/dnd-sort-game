import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { PLACES_SCHEMA, VALUES_SCHEMA } from '../../constants';
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

interface StartProps {
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  placeIndex: number | readonly number[];
  setPlaceIndex: Dispatch<SetStateAction<number | readonly number[]>>;
  valueIndex: number | readonly number[];
  setValueIndex: Dispatch<SetStateAction<number | readonly number[]>>;
  sort: number;
  setSortMode: Dispatch<SetStateAction<number>>;
}

const Start: React.FC<StartProps> = ({
  setGameStarted,
  placeIndex,
  setPlaceIndex,
  valueIndex,
  setValueIndex,
  sort,
  setSortMode
}) => (
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
        <PlayButton
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Играть
        </PlayButton>
      </div>
    </StartPageForm>
  </StartPageWrapper>
);

export default Start;
