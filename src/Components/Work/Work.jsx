import React from 'react';
import { HeadingTwo, WorkContainer, WorkFlower } from './Work.style';

const Work = () => {
  return (
    <WorkContainer>
      <HeadingTwo>
            Our Work
            <WorkFlower />
        </HeadingTwo>
    </WorkContainer>
  )
}

export default React.memo(Work);
