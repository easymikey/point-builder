import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPointListItem = styled.p`
  width: 100%;
  margin: 0;

  color: #474242;

  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.form`
  height: 2rem;
  border-bottom-width: 1px;

  border-bottom-color: rgba(199, 197, 197, 0.5);

  display: flex;
  border-bottom-style: solid;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  margin: 0 0.5rem;
`;



interface Props {
  name: string;
}

const PointListItem: FC<Props> = ({ name }) => (
  <Wrapper>
    <StyledCheckbox type="checkbox" />
    <StyledPointListItem>
      {name}
    </StyledPointListItem>
  </Wrapper>
);

export default PointListItem;
