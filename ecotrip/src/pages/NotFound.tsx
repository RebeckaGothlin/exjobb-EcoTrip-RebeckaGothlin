import { Link } from "react-router-dom"
import { NotFoundContainer } from "../components/styled/StyledNotFound"


export const NotFound = () => {
    return (
        <>
            <NotFoundContainer>
                <div className="img-container-404">
                    <img src="/404.png" alt="Error, page not found." />
                </div>
                <Link to={"/"} className="back-a">
                    Go back to home page
                </Link>
            </NotFoundContainer>
        </>
    )
}