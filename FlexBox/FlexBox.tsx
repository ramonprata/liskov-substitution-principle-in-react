import * as React from 'react';

import { FlexStyled, IFlexStyledProps } from './FlexBox.styled';

interface IFlexBoxProps extends IFlexStyledProps {}

const FlexBox: React.FC<IFlexBoxProps & React.PropsWithChildren> = ({
  children,
  ...flexProps
}) => {
  return <FlexStyled {...flexProps}>{children}</FlexStyled>;
};

interface IFlexCenterProps extends IFlexBoxProps {}

export const FlexCenter: React.FC<IFlexCenterProps & React.PropsWithChildren> =
  ({ children, ...flexProps }) => {
    return (
      <FlexBox align="center" justify="center" {...flexProps}>
        {children}
      </FlexBox>
    );
  };

export default FlexBox;
