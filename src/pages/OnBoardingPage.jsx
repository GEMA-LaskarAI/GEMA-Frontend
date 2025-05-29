import {Link, useNavigate} from "react-router-dom";

function OnBoardingPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/login");
    };

    return(
        <div className="onboarding-page">
            <div className="onboarding-layout">
                <h1 onClick={handleStart}>Onboarding</h1>
                <Link to="/login" className="create-link">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default OnBoardingPage;
