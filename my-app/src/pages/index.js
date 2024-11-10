import React from "react";
import './index.css';
import GachaButton from "../components/button.js";

const Home = () => {
    const [isOpen, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <div>
                <h1>
                    Change for code
                </h1>
            </div>
            <div>
                <GachaButton onClick={handleClick}>Toggle</GachaButton>
                {isOpen && <div>Test</div>}
            </div>
        </>
    );
};

export default Home;