import { FC } from 'react';
import medal from '../../assets/images/images/3rd Place Medal.png';
import ui from '../../assets/images/images/Nail Polish.png';
import speak from '../../assets/images/images/Otter.png';
import run from '../../assets/images/images/Person Running.png';
import best from '../../assets/images/images/Puzzle Piece.png';
import rocket from '../../assets/images/images/Rocket.png';
import trophy from '../../assets/images/images/Trophy.png';
import style from './style.module.scss';

const winnersList = [
  {
    id: 1,
    data: {
      title: 'Победитель хакатона',
      image: trophy,
    },
  },
  {
    id: 2,
    data: {
      title: 'Сбежал с хакатона',
      image: run,
    },
  },
  {
    id: 3,
    data: {
      title: 'Третье место в хакатоне',
      image: medal,
    },
  },
  {
    id: 4,
    data: {
      title: 'Первое участие в хакатоне',
      image: rocket,
    },
  },
  {
    id: 5,
    data: {
      title: 'Лучший исследователь',
      image: best,
    },
  },
  {
    id: 6,
    data: {
      title: 'Спикер митапа',
      image: speak,
    },
  },
  {
    id: 7,
    data: {
      title: 'Мастер UI',
      image: ui,
    },
  },
];

const Achievement: FC<{
  id: number;
}> = ({ id }) => {
  // Находим победителя по id
  const winner = winnersList.find((winner) => winner.id === id);

  if (winner) {
    return (
      <div className={style.achievement}>
        <img src={winner.data.image} alt={winner.data.title} />
        <p>{winner.data.title}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Achievement;
