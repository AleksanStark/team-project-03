import { useState } from 'react';
import css from './DailyNorma.module.css';
import DailyNormaModal from 'components/DailyNormaModal/DailyNormaModal';
import { useSelector } from 'react-redux';
// import { getUserData } from '../../redux/auth/operations';
import { selectDaylyNorma } from '../../redux/water/selector';

const DailyNorma = () => {
    // const dispatch = useDispatch();
    const userNorma = useSelector(selectDaylyNorma);
    // const [dailyNorma, setDailyNorma] = useState(userNorma);

    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     dispatch(getUserData())
    //         .then(response => {
    //             if (response.payload && response.payload.data) {
    //                 setDailyNorma(response.payload.data.dailyNorma || 2);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching user data:', error);
    //             setDailyNorma(2);
    //         });
    // }, [dispatch]);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className={css.container}>
            <div className={css.headerContainer}>
                <h2 className={css.headerText}>My daily norma</h2>
            </div>
            <div className={css.funcContainer}>
                <h2 className={css.waterInfo}>{userNorma} L</h2>
                <button
                    type="button"
                    className={css.editButton}
                    onClick={openModal}
                >
                    Edit
                </button>
            </div>
            <DailyNormaModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
};

export default DailyNorma;
