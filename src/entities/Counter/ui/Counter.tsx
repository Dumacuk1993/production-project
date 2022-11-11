import { counterActions } from 'entities/Counter/model/slice/CounterSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="counter-title">{ counterValue }</h1>
            <button
                type="button"
                onClick={increment}
                data-testid="button-increment"
            >
                {t('increment')}
            </button>
            <button
                type="button"
                onClick={decrement}
                data-testid="button-decrement"
            >
                {t('decrement')}
            </button>
        </div>
    );
};
