import React from 'react';

import { Wrapper } from './styles';

type TTitle = {
  text: string;
}

const Title: React.FC<TTitle> = ({ text }: TTitle) => (
  <Wrapper>{text}</Wrapper>
);

export default Title;
