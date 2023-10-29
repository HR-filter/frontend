import { useState } from 'react';
import { SimpleSlide } from '../../components/SimpleSlide';

function Main() {
  const [isSlideOpen, setIsSlideOpen] = useState(true);

  return (
    <SimpleSlide isSlideOpen={isSlideOpen} setIsSlideOpen={setIsSlideOpen} />
  );
}

export default Main;
