// Lib
import { FC } from "react";

// Components
import { StyledDataBlock, HeaderText, SecondaryText } from "./styled";

interface IDataBlock {
  children?: JSX.Element;
  headerText: string;
  secondaryText?: string;
  gridArea?: string;
}

const DataBlock: FC<IDataBlock> = ({
  children,
  headerText,
  secondaryText,
  gridArea,
}) => {
  return (
    <StyledDataBlock gridArea={gridArea}>
      <div>
        <HeaderText>{headerText}</HeaderText>
        <SecondaryText>{secondaryText}</SecondaryText>
      </div>
      {children}
    </StyledDataBlock>
  );
};

export default DataBlock;
