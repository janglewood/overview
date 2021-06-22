// Lib
import { FC } from "react";
import DataBlock from "../DataBlock";
// Components
import { Text, MainTextContainer } from "./styled";
interface IOnlineKitsBlock {
  total: number;
  online: number;
}

const OnlineKitsBlock: FC<IOnlineKitsBlock> = ({ total, online }) => {
  return (
    <DataBlock headerText="Online Kits">
      <MainTextContainer>
        <Text online={true}>{online}</Text>
        <Text>{" / "}</Text>
        <Text>{total}</Text>
      </MainTextContainer>
    </DataBlock>
  );
};

export default OnlineKitsBlock;
