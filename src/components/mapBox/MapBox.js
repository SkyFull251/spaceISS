import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from 'react';

import { useHttp } from '../../hooks/http.hooks'
import Spinner from '../spinner/Spinner';

import './mapBox.scss';

const AnyReactComponent = () => <div className='circlemap'></div>;

const MapBox = () => {

    useEffect(() => {
        request('http://api.open-notify.org/iss-now.json')
            .then(data => { setPos(data) })
    }, []);
    const { request } = useHttp();
    const [pos, setPos] = useState({});

    const answer = async () => {
        await request('http://api.open-notify.org/iss-now.json')
            .then(data => { setPos(data) })
    }
    setTimeout(answer, 5000);

    return (
        pos.iss_position ? (
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAPGmWyBRgCDg6eKRr6Vvgbrxbf9iXEWX0" }}
                    defaultCenter={{
                        lat: 0,
                        lng: 0
                    }}
                    defaultZoom={0}
                >
                    <AnyReactComponent
                        lat={pos.iss_position.latitude}
                        lng={pos.iss_position.longitude}
                    />
                </GoogleMapReact>
            </div>
        ) : <Spinner />
    );
};

export default MapBox;
