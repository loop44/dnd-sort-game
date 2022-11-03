import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier
} from '@dnd-kit/core';

// Import images
import dockBg1 from '../../public/static/assets/dock-bg/1.png';
import dockBg2 from '../../public/static/assets/dock-bg/2.png';
import dockBg3 from '../../public/static/assets/dock-bg/3.png';
import dockBg4 from '../../public/static/assets/dock-bg/4.png';
import bg1 from '../../public/static/assets/game-bg/1.jpg';
import bg2 from '../../public/static/assets/game-bg/2.jpg';
import bg3 from '../../public/static/assets/game-bg/3.jpg';
import bg4 from '../../public/static/assets/game-bg/4.jpg';
import item11 from '../../public/static/assets/items/items1/1.png';
import item12 from '../../public/static/assets/items/items1/2.png';
import item13 from '../../public/static/assets/items/items1/3.png';
import item14 from '../../public/static/assets/items/items1/4.png';
import item21 from '../../public/static/assets/items/items2/1.png';
import item22 from '../../public/static/assets/items/items2/2.png';
import item23 from '../../public/static/assets/items/items2/3.png';
import item24 from '../../public/static/assets/items/items2/4.png';
import item31 from '../../public/static/assets/items/items3/1.png';
import item32 from '../../public/static/assets/items/items3/2.png';
import item33 from '../../public/static/assets/items/items3/3.png';
import item34 from '../../public/static/assets/items/items3/4.png';
import item41 from '../../public/static/assets/items/items4/1.png';
import item42 from '../../public/static/assets/items/items4/2.png';
import item43 from '../../public/static/assets/items/items4/3.png';
import item44 from '../../public/static/assets/items/items4/4.png';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

import { Dock, GamePageInner, GamePageWrapper, Playground } from './Game.elements';

const backgrounds = [bg1, bg2, bg3, bg4];
const docks = [dockBg1, dockBg2, dockBg3, dockBg4];
const playgroundItems = [
  [item11, item12, item13, item14],
  [item21, item22, item23, item24],
  [item31, item32, item33, item34],
  [item41, item42, item43, item44]
];

const randomTheme = Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1));

const randomItemsTheme = playgroundItems[randomTheme];

type DraggableItem = {
  id: UniqueIdentifier;
  value: number;
  element: boolean;
  img: StaticImageData;
};

const mockItems: DraggableItem[] = [
  {
    id: 1,
    value: 12,
    element: false,
    img: randomItemsTheme[Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1))]
  },
  {
    id: 2,
    value: 54,
    element: false,
    img: randomItemsTheme[Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1))]
  },
  {
    id: 3,
    value: 32,
    element: false,
    img: randomItemsTheme[Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1))]
  },
  {
    id: 4,
    value: 32,
    element: false,
    img: randomItemsTheme[Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1))]
  },
  {
    id: 5,
    value: 32,
    element: false,
    img: randomItemsTheme[Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1))]
  }
];

const Game = () => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeImg, setActiveImg] = useState<StaticImageData | string>('');
  const [items, setItems] = useState<DraggableItem[]>(mockItems);
  const [filteredItems, setFilteredItems] = useState<(DraggableItem | null)[]>([
    null,
    null,
    null,
    null,
    null
  ]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveImg(event?.active?.data?.current?.img);
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
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <GamePageWrapper>
        <Image
          src={backgrounds[randomTheme]}
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
                <Draggable key={index} id={item.id} img={item.img}>
                  <Image src={item.img} alt="" />
                </Draggable>
              )
            )}
          </Playground>
          <Dock>
            <Image src={docks[randomTheme]} alt="" fill placeholder="blur" />
            <div>
              {filteredItems.map((item, index) => (
                <Droppable key={index + 1} id={index + 1}>
                  {item === null ? (
                    <div key={index} />
                  ) : (
                    <Draggable id={item.id} img={item.img}>
                      <Image src={item.img} alt="" />
                    </Draggable>
                  )}
                </Droppable>
              ))}
            </div>
          </Dock>
        </GamePageInner>
      </GamePageWrapper>

      <DragOverlay>
        {activeId ? <Image src={activeImg} width={131} height={131} alt="" /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Game;
