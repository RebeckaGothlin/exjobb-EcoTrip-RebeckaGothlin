import { Link } from "react-router-dom";
import {
  NotFoundContainer,
  StyledDescription,
  StyledTitle,
} from "../components/styled/StyledNotFound";
import { LinkButton } from "../components/styled/StyledButtons";
import { Navbar } from "../components/Navbar";

export const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <NotFoundContainer>
        <div className="img-container-404">
          <img src="/404-error.png" alt="Error, page not found." />
        </div>
        <StyledTitle>Lost in the Wilderness? 🌍</StyledTitle>
        <StyledDescription>
          Looks like you’ve hit a wrong turn on the road of exploration. But
          don’t worry, a quick reroute and you’ll be back on track—let’s travel
          responsibly and find your way home!
        </StyledDescription>

        <Link to={"/"}>
          <LinkButton>Back to Home</LinkButton>
        </Link>
      </NotFoundContainer>
    </>
  );
};
