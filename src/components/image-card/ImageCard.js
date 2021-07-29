import React, { useEffect, useState } from 'react';

export default function ImageCard(props) {
    const [btnState, setBtnState] = useState('');
    const [imageUrl, setImageUrl] = useState(props.gif.images.fixed_height.url);
    const handleClick = () => {

        
        setBtnState(btnState == '' ? 'paused' : '')
    }
    useEffect(() => {
        setImageUrl(btnState == 'paused' ? props.gif.images.fixed_height.url : props.gif.images.fixed_height_still.url)
    }, [btnState])

    return (
        <div className="image-card" key={props.index}>
            <button className={`pay-pause-btn ${btnState}`} onClick={handleClick} />
            <img className="trending-wrapper-frame" src={imageUrl} />

        </div>
    );
}

