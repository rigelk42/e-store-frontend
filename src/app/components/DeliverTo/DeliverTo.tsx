import classes from './DeliverTo.module.css';

export default function DeliverTo() {
    return (
        <div className={`${classes['deliver-to']}`}>
            <span className='text-xs text-white'>Deliver To</span>
            <span className='text-sm text-white font-bold'>Chula Vista 91911</span>
        </div>
    );
};
