import './timeBox.scss';

const TimeBox = () => {
    const date = new Date();
    const MyDateString = ('0' + date.getDate()).slice(-2) + '/'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
            + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':'
            + ('0' + date.getMinutes()).slice(-2);
    return (
        <div className='time'>
            <h3 className='time__title'>Current UTC time:</h3>
            <p className='time__text'>{MyDateString}</p>
        </div>
    );
};

export default TimeBox;