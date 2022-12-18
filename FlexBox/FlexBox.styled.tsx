import styled from '@emotion/styled';

type AlignTypes = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

type JustifyTypes =
  | AlignTypes
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface IFlexStyledProps {
  direction?: 'column' | 'row';
  align?: AlignTypes;
  justify?: JustifyTypes;
}
export const FlexStyled = styled.div(
  ({
    direction = 'row',
    align = 'stretch',
    justify = 'flex-start',
  }: IFlexStyledProps) => ({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    height: '100%',
    border: '2px dashed purple',
    borderRadius: 8,
  })
);
