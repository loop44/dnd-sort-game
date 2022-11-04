import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier
} from '@dnd-kit/core';

import {
  ALPHABET,
  BACKGROUNDS,
  DOCKS,
  MUSICS,
  PLACES_SCHEMA,
  PLAYGROUND_ITEMS,
  VALUES_SCHEMA
} from '../../constants';
import { useAudio } from '../../hooks/audio';
import ArrowImg from '../../public/static/assets/arrow.png';
import CloverImg from '../../public/static/assets/clover.png';
import StarImg from '../../public/static/assets/star.png';
import { randomInteger, randomIntegersArray } from '../../utils';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

import {
  Dock,
  DraggableItemValue,
  GamePageInner,
  GamePageWrapper,
  Hint,
  Playground,
  Result
} from './Game.elements';

type DraggableItem = {
  id: UniqueIdentifier | number;
  value: number | string;
  element: boolean;
  img: StaticImageData;
};

interface GameProps {
  placeIndex: number | readonly number[];
  valueIndex: number | readonly number[];
  sort: number;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}

const Game: React.FC<GameProps> = ({ placeIndex, valueIndex, sort, setGameStarted }) => {
  const [win, setWin] = useState<null | boolean>(null);
  const [randomTheme] = useState(randomInteger(0, 3));
  const off = useAudio(MUSICS[randomInteger(0, 3)]);
  const [randomItemsTheme] = useState(PLAYGROUND_ITEMS[randomTheme]);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeImg, setActiveImg] = useState<StaticImageData | string>('');
  const [activeValue, setActiveValue] = useState<string>('');

  const max = VALUES_SCHEMA[valueIndex as keyof typeof VALUES_SCHEMA];
  const count = PLACES_SCHEMA[placeIndex as keyof typeof PLACES_SCHEMA];

  const [items, setItems] = useState<DraggableItem[]>(
    randomIntegersArray(1, Number.isFinite(Number(max)) ? Number(max) + 1 : 34, count).map(
      (item, index) => ({
        id: index + 1,
        value: Number.isFinite(Number(max)) ? item : ALPHABET[item],
        element: false,
        img: randomItemsTheme[randomInteger(0, 3)]
      })
    )
  );

  const [filteredItems, setFilteredItems] = useState<(DraggableItem | null)[]>(
    items.map(() => null)
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveImg(event?.active?.data?.current?.img);
    setActiveValue(event?.active?.data?.current?.value);
    setActiveId(event?.active?.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);

    /* If element not over droppable area 
        we give it emelent: false
        and replace filterArray element to null
    */
    if (!event.over) {
      const itemsChanged = items.map((item) => {
        if (item.id === event.active.id) {
          return {
            ...item,
            element: false
          };
        }
        return item;
      });

      const filteredItemsChanged = filteredItems.slice().map((item) => {
        if (item?.id === event.active.id) {
          return null;
        }
        return item;
      });

      setItems(itemsChanged);
      setFilteredItems(filteredItemsChanged);

      return;
    }

    /* Here we check for an event when an element is 
        released over another element. We return an 
        empty value to prevent further sorting.
     */
    if (filteredItems[Number(event.over.id) - 1]?.id) {
      return;
    }

    const itemsChanged = items.map((item) => {
      if (item.id === event.active.id) {
        return {
          ...item,
          element: true
        };
      }
      return item;
    });

    const filteredItemsCopy = filteredItems.slice();

    /* Here we do a check on the movement of the element 
        on the dock. If this is not done, they will be duplicated
    */
    const duplicateElement = filteredItems.findIndex((item) => item?.id === event.active.id);
    if (duplicateElement !== -1) {
      filteredItemsCopy[duplicateElement] = null;
    }

    /* After all the checks, we change the array that will be 
        displayed in the dock
    */
    const newElement = items.find((item) => item.id === event.active.id);
    if (newElement) {
      filteredItemsCopy[Number(event.over.id) - 1] = newElement;
    }

    setItems(itemsChanged);
    setFilteredItems(filteredItemsCopy);

    // Checking when an array is full
    if (!filteredItemsCopy.includes(null)) {
      const valuesArr = filteredItemsCopy.map((item) => item?.value);

      if (Number.isFinite(Number(max))) {
        // Numeric array validation
        const sortedItems = sort
          ? valuesArr
              .slice()
              .sort((a, b) => Number(b) - Number(a))
              .join('')
          : valuesArr
              .slice()
              .sort((a, b) => Number(a) - Number(b))
              .join('');

        setWin(valuesArr.join('') === sortedItems);
      } else {
        // Verifying a literal array
        const sortedItems = sort
          ? valuesArr.slice().sort().join('')
          : valuesArr.slice().sort().reverse().join('');

        setWin(valuesArr.join('') === sortedItems);
      }
    }
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <GamePageWrapper>
        <Image
          src={BACKGROUNDS[randomTheme]}
          alt=""
          priority
          fill
          placeholder="blur"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <GamePageInner>
          <Playground>
            {items.map((item, index) =>
              item.element ? (
                <div key={index} />
              ) : (
                <Draggable key={index} id={item.id} img={item.img} value={String(item.value)}>
                  <Image src={item.img} alt="" />
                  <DraggableItemValue>{item.value}</DraggableItemValue>
                </Draggable>
              )
            )}
          </Playground>
          <Hint asc={sort === 0}>
            <Image src={ArrowImg} alt="" fill />
            <div>{sort === 0 ? 'По возрастанию' : 'По убыванию'}</div>
          </Hint>
          <Dock>
            <Image src={DOCKS[randomTheme]} alt="" fill placeholder="blur" />
            <div>
              {filteredItems.map((item, index) => (
                <Droppable key={index + 1} id={index + 1}>
                  {item === null ? (
                    <div key={index} />
                  ) : (
                    <Draggable id={item.id} img={item.img} value={String(item.value)}>
                      <Image src={item.img} alt="" />
                      <DraggableItemValue>{item.value}</DraggableItemValue>
                    </Draggable>
                  )}
                </Droppable>
              ))}
            </div>
          </Dock>
        </GamePageInner>
      </GamePageWrapper>

      <DragOverlay>
        {activeId ? (
          <>
            <Image src={activeImg} width={131} height={131} alt="" />
            <DraggableItemValue>{activeValue}</DraggableItemValue>
          </>
        ) : null}
      </DragOverlay>

      <Result active={win !== null}>
        <div>
          <div className={win ? 'win' : 'lose'}>
            {win ? (
              <>
                <h1>Победа</h1>
                <p>Молодец! Ты успешно справился с заданием!</p>
                <Image src={StarImg} alt="" />
                <Image src={StarImg} alt="" />
                <Image src={StarImg} alt="" />
                <Image src={StarImg} alt="" />
              </>
            ) : (
              <>
                <h1>Ой-ой</h1>
                <p>Не переживай, получится в другой раз!</p>
                <Image src={CloverImg} alt="" />
                <Image src={CloverImg} alt="" />
                <Image src={CloverImg} alt="" />
                <Image src={CloverImg} alt="" />
              </>
            )}

            <button
              onClick={() => {
                setGameStarted(false);
                off();
              }}
            >
              Заново
            </button>
          </div>
        </div>
      </Result>
    </DndContext>
  );
};

export default Game;
