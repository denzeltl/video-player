import React from 'react';

function Menu(props) {
    const handleClick = (e) => {
        const newVid = e.target.value;
        props.chooseVideo(newVid);
    };

    return (
        <form onClick={handleClick}>
            <input type="radio" name="src" value="fast" /> fast
            <input type="radio" name="src" value="slow" /> slow
            <input type="radio" name="src" value="cute" /> cute
            <input type="radio" name="src" value="eek" /> eek
        </form>
    );
}

export default Menu;
