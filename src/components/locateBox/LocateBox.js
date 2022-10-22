import { useState, useEffect } from 'react';

import { useHttp } from '../../hooks/http.hooks'

import './locateBox.scss';

const LocateBox = () => {

    useEffect(() => {
        request('http://api.open-notify.org/iss-now.json')
            .then(data => { setPos(data) })
    }, []);

    const { request } = useHttp();

    const [pos, setPos] = useState({
        iss_position: {
            latitude: 0,
            longitude : 0
        }
    });

    const answer = async () => {
        await request('http://api.open-notify.org/iss-now.json')
            .then(data => { setPos(data) })
    }
    setTimeout(answer, 5000);
    return (
        <div className="locate">
            <h3 className='locate__title'>ISS in now located at</h3>
            <p className='locate__text'>longitude: {pos.iss_position.longitude}, latitude: {pos.iss_position.latitude}</p>
        </div>
    );
};

export default LocateBox;