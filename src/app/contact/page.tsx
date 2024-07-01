'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CardData {
  id: number;
  name: string;
  title: string;
}

const initialCardsData: CardData[] = [
  { id: 1, name: 'Generic Guy 1', title: 'oil lamp' },
  { id: 2, name: 'Generic Guy 2', title: 'pants' },
  { id: 3, name: 'Generic Guy 3', title: 'plant 003' },
  { id: 4, name: 'Generic Guy 4', title: 'sony' },
];

const titleColors = [
  'bg-yellow-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-red-200',
];

interface AnimatedCardProps {
  card: CardData;
  isOpen: boolean;
  toggleOpen: (id: number) => void;
  index: number;
  totalCards: number;
  isFirst: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  isOpen,
  toggleOpen,
  index,
  totalCards,
  isFirst,
}) => {
  const zIndex = isOpen ? totalCards * 10 : index;
  const cardHeight = 80; // 카드 높이
  const overlapHeight = cardHeight / 4; // 1/3만큼 겹치도록 설정 (간격 증가)

  return (
    <motion.div
      layout
      className={`absolute mb-2 flex h-80 w-[50%] cursor-pointer select-none flex-col items-center justify-center rounded-3xl border border-gray-400 bg-[#1d1b1b] font-semibold`}
      initial={{ y: 0 }}
      animate={{
        y: isOpen ? -140 : 0,
        zIndex: zIndex,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      onClick={() => toggleOpen(card.id)}
      style={{ top: `${index * overlapHeight}px` }}
    >
      {isOpen ? (
        <div className="relative w-full px-4 py-2 text-center text-lg font-bold text-white">
          {card.name}
        </div>
      ) : (
        isFirst && (
          <div className="relative w-full px-4 py-2 text-center text-lg font-bold text-white">
            Click Me!
          </div>
        )
      )}
      <div
        className={`absolute right-0 top-2 translate-x-full transform px-2 py-1 text-sm font-medium text-gray-700 ${
          titleColors[(card.id - 1) % titleColors.length]
        }`}
      >
        {card.title}
      </div>
    </motion.div>
  );
};

const AnimatedCards: React.FC = () => {
  const [cardsData, setCardsData] = useState(initialCardsData);
  const [openCardId, setOpenCardId] = useState<number>(-1);

  const moveCardToBack = (cardId: number) => {
    setCardsData((prev) => {
      const cardToMove = prev.find((card) => card.id === cardId);
      if (!cardToMove) return prev;
      const newCards = prev.filter((card) => card.id !== cardId);
      return [cardToMove, ...newCards];
    });
  };

  const toggleOpen = (id: number) => {
    if (id === openCardId) {
      setOpenCardId(-1);
      moveCardToBack(id);
    } else {
      if (openCardId !== -1) {
        moveCardToBack(openCardId);
      }
      setOpenCardId(id);
    }
  };

  return (
    <div className="xs:mt-20 container relative mx-auto flex h-full w-full items-center justify-center">
      <AnimatePresence mode="wait">
        {cardsData.map((card, index, array) => (
          <AnimatedCard
            key={card.id}
            card={card}
            isOpen={openCardId === card.id}
            toggleOpen={toggleOpen}
            index={index}
            totalCards={cardsData.length}
            isFirst={openCardId === -1 && index === array.length - 1} // 수정된 부분
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCards;
