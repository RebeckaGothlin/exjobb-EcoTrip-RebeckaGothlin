import { Link } from "react-router-dom"
import { NotFoundContainer } from "../components/styled/StyledNotFound"
import { repo } from "../Router"

export const NotFound = () => {
    return (
        <>
            <NotFoundContainer>
                <div className="img-container-404">
                    <img src={`${repo}./../404.png}`} alt="Error, page not found." />
                </div>
                <Link to={"/"} className="back-a">
                    Go back to home page
                </Link>
            </NotFoundContainer>
        </>
    )
}