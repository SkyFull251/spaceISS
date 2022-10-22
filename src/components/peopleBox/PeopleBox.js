import { useState, useEffect } from 'react';

import { useHttp } from '../../hooks/http.hooks'
import Spinner from '../spinner/Spinner';

import logo from '../../assets/person.png';
import './peopleBox.scss';

const PeopleBox = () => {

    useEffect(() => {
        request('http://api.open-notify.org/astros.json')
            .then(data => { setPos(data) });
    }, [])
    const [iss, setPos] = useState({});
    const { request } = useHttp();

    let count = 0;
    const renderItem = () => {
        //eslint-disable-next-line
        const items = iss.people.map((item,i) => {
            if(item.craft === 'ISS'){
                count++;
                return (
                    <li className="people__item" key={i}>
                        <img src={logo} alt="logo" />
                        <p>{item.name}</p>
                    </li>
                )
            }
        })
        return items;
    }

    let items;
    if(iss.people){
        items = renderItem();
    }else{
        items = <Spinner/>
    }

    return (
        <div className='people'>
            <ul className="people__list">
                {items}
            </ul>
            <div className="people__info">
                <p>Total amount: {count} people on ISS</p>
            </div>
        </div>
    );
};

export default PeopleBox;