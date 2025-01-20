import { Header } from "../components/Header";
import {
  GlobalWrapper,
} from "../components/styled/StyledContent";
import { GlobalKeyframes } from "../components/styled/StyledHeader";

export const Home = () => {
  return (
    <>
      <GlobalWrapper>
      <GlobalKeyframes />
        <Header></Header>
      </GlobalWrapper>
    </>
  );
};
