// src/AnimatedCards.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardData {
  id: number;
  name: string;
  title: string;
}

const cardsData: CardData[] = [
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
  const zIndex = isOpen ? totalCards : index;
  const backgroundColor = isOpen ? 'bg-opacity-100' : 'bg-opacity-90';

  return (
    <motion.div
      className={`absolute mb-2 flex h-80 w-[50%] cursor-pointer select-none flex-col items-center justify-center rounded-3xl font-semibold shadow-inner shadow-gray-300 ${backgroundColor}`}
      initial={{ y: 0 }}
      animate={{ y: isOpen ? -140 : 0, zIndex: isOpen ? totalCards : index }} // 높이와 zIndex 조정
      transition={{ type: 'spring', stiffness: 100, damping: 10 }} // 애니메이션 조정
      onClick={() => toggleOpen(isOpen ? -1 : card.id)}
      style={{ top: `${index * 10}px`, zIndex }}
    >
      {isOpen ? (
        <div className="relative w-full px-4 py-2 text-center text-lg font-bold text-blue-300">
          {card.name}
        </div>
      ) : (
        isFirst && (
          <div className="relative w-full px-4 py-2 text-center text-lg font-bold text-blue-300">
            Click Me!
          </div>
        )
      )}
      <div
        className={`absolute right-0 translate-x-full transform px-2 py-1 text-sm font-medium text-gray-700 ${titleColors[index % titleColors.length]}`}
        style={{ top: `${index * 10}px`, zIndex }}
      >
        {card.title}
      </div>
    </motion.div>
  );
};

const AnimatedCards: React.FC = () => {
  const [openCardId, setOpenCardId] = useState<number>(-1);

  const toggleOpen = (id: number) => {
    setOpenCardId(id === openCardId ? -1 : id);
  };

  return (
    <div className="xs:mt-32 container relative mx-auto flex h-full w-full items-center justify-center">
      {cardsData
        .slice()
        .reverse()
        .map((card, index) => (
          <AnimatedCard
            key={card.id}
            card={card}
            isOpen={openCardId === card.id}
            toggleOpen={toggleOpen}
            index={index}
            totalCards={cardsData.length}
            isFirst={openCardId === -1 && index === 0}
          />
        ))}
    </div>
  );
};

const ContactPage: React.FC = () => {
  return <AnimatedCards />;
};

export default ContactPage;
