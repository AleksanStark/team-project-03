import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './TodayWaterList.module.css';
import { toast } from 'react-toastify';
import {
    addWaterRecord,
    deleteWaterRecord,
    getDailyRecord,
    // updateWaterRecord,
} from '../../redux/water/operations';

import TodayListModal from '../../components/TodayListModal/TodayListModal';
import EditWaterModal from '../../components/EditWaterModal/EditWaterModal';
import { DeleteConfirmationModal } from '../../components/DeleteConfirmationModal/DeleteConfirmationModal';
import { selectDalyWaters } from '../../redux/water/selector';
const TodayWaterList = () => {
    const [waterList, setWaterList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [recordIdToDelete, setRecordIdToDelete] = useState(null);
    // const [isAddMode, setIsAddMode] = useState(true);
    // const [amount, setAmount] = useState('');
    // const [time, setTime] = useState('');
    const dispatch = useDispatch();
    //const error = useSelector(selectError);
    const [dayWaters, setDayWaters] = useState([]);
    const dayWatersRedux = useSelector(selectDalyWaters);
    console.log(dayWaters);
    //const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
    useEffect(() => {
        dispatch(addWaterRecord());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getDailyRecord())
            .then(response => {
                if (dayWatersRedux && response.payload.data) {
                    setDayWaters(response.payload.data);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [dispatch, setDayWaters, dayWatersRedux]);
    useEffect(() => {
        dispatch(getDailyRecord());
    }, [dispatch]);
    // useEffect(() => {
    //     if (error) {
    //         toast.error(`Error: ${error}`);
    //     }
    // }, [error]);
    // console.log(isLoading);
    const handleSave = newRecord => {
        setWaterList(prevList => {
            const isEditing = prevList.some(
                record => record.id === newRecord.id,
            );
            if (isEditing) {
                return prevList.map(record =>
                    record.id === newRecord.id ? newRecord : record,
                );
            } else {
                return [...prevList, newRecord];
            }
        });
    };
    const handleDelete = recordId => {
        dispatch(deleteWaterRecord(recordId))
            .then(() => {
                setWaterList(prevList =>
                    prevList.filter(record => record.id !== recordId),
                );
                toast.success('Record deleted successfully');
            })
            .catch(err => {
                toast.error(`Error: ${err.message}`);
            });
    };
    const openDeleteConfirmationModal = recordId => {
        setRecordIdToDelete(recordId);
        setDeleteModalOpen(true);
    };

    const closeDeleteConfirmationModal = () => {
        setDeleteModalOpen(false);
        setRecordIdToDelete(null);
    };

    const confirmDelete = () => {
        handleDelete(recordIdToDelete);
        closeDeleteConfirmationModal();
    };

    const openModalForAdd = () => {
        setCurrentRecord(null);
        // setIsAddMode(true);
        setIsModalOpen(true);
    };

    const openEditModal = record => {
        setCurrentRecord(record);
        setIsEditModalOpen(true);
    };

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }

    // if (error) {
    //   return <div>Error: {error}</div>;
    // }

    return (
        <div className={css.todayWaterList}>
            <h3 className={css.todayH3}>Today</h3>
            {waterList.length > 0 && (
                <ul className={css.waterList}>
                    {waterList.map(record => (
                        <li key={record.id} className={css.waterRecord}>
                            <div className={css.recordWrapper}>
                                <svg
                                    width="23"
                                    height="30"
                                    viewBox="0 0 23 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.260986 0.130432L2.39972 29.7888V29.8696H20.8122L22.9509 0.222754V0.130432H0.260986ZM20.0557 29.0387H3.16193L1.55788 6.82376H2.43954L3.89002 26.4017C3.89851 26.5048 3.94461 26.601 4.0193 26.6714C4.09399 26.7418 4.1919 26.7815 4.29387 26.7826H4.328C4.38108 26.7789 4.43293 26.7646 4.48056 26.7406C4.52819 26.7165 4.57067 26.6832 4.60556 26.6424C4.64044 26.6017 4.66704 26.5544 4.68384 26.5031C4.70063 26.4519 4.70729 26.3979 4.70342 26.344L3.25294 6.82376H21.6597L20.0557 29.0387ZM21.7166 5.99286H3.19037L2.87184 1.66528C2.86183 1.5597 2.81293 1.46184 2.7349 1.39125C2.65687 1.32065 2.55546 1.28251 2.45092 1.28445C2.34378 1.29473 2.24477 1.34679 2.17474 1.42968C2.1047 1.51256 2.06913 1.61978 2.0755 1.72875L2.39404 5.99863H1.501L1.13696 0.955557H22.0807L21.7166 5.99286Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M6.77965 10.9321C7.04516 10.9321 7.3047 10.8522 7.52545 10.7026C7.74621 10.553 7.91827 10.3403 8.01987 10.0914C8.12147 9.84262 8.14806 9.56882 8.09626 9.30467C8.04446 9.04052 7.91661 8.79788 7.72887 8.60743C7.54114 8.41699 7.30194 8.2873 7.04154 8.23475C6.78114 8.18221 6.51123 8.20918 6.26594 8.31224C6.02065 8.41531 5.811 8.58985 5.66349 8.81379C5.51599 9.03773 5.43726 9.30101 5.43726 9.57033C5.43726 9.93149 5.57869 10.2779 5.83044 10.5332C6.08218 10.7886 6.42363 10.9321 6.77965 10.9321ZM6.77965 9.03371C6.88428 9.03371 6.98656 9.06519 7.07355 9.12415C7.16054 9.18311 7.22835 9.26692 7.26838 9.36498C7.30842 9.46303 7.3189 9.57093 7.29849 9.67502C7.27808 9.77912 7.22769 9.87473 7.15371 9.94978C7.07973 10.0248 6.98547 10.0759 6.88286 10.0966C6.78024 10.1173 6.67388 10.1067 6.57722 10.0661C6.48056 10.0255 6.39794 9.95671 6.33981 9.86846C6.28168 9.78022 6.25066 9.67647 6.25066 9.57033C6.25066 9.42801 6.30639 9.29152 6.4056 9.19089C6.5048 9.09025 6.63936 9.03371 6.77965 9.03371Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M6.77379 15.3577C6.77716 15.6265 6.85889 15.8883 7.00868 16.1101C7.15847 16.3319 7.36962 16.5037 7.61552 16.6039C7.86142 16.7042 8.13106 16.7284 8.39048 16.6734C8.64989 16.6185 8.88747 16.4868 9.07328 16.2952C9.25908 16.1035 9.3848 15.8603 9.43458 15.5962C9.48437 15.3322 9.45599 15.0591 9.35304 14.8114C9.25008 14.5637 9.07715 14.3524 8.85603 14.2042C8.63492 14.056 8.37551 13.9776 8.1105 13.9787C7.93325 13.9794 7.7579 14.0158 7.59457 14.0856C7.43124 14.1555 7.28316 14.2575 7.15889 14.3857C7.03461 14.5139 6.9366 14.6658 6.8705 14.8326C6.8044 14.9995 6.77154 15.1779 6.77379 15.3577ZM8.6395 15.3577C8.6395 15.4639 8.60847 15.5676 8.55035 15.6559C8.49222 15.7441 8.4096 15.8129 8.31294 15.8535C8.21628 15.8941 8.10991 15.9047 8.0073 15.884C7.90468 15.8633 7.81043 15.8122 7.73644 15.7372C7.66246 15.6621 7.61208 15.5665 7.59167 15.4624C7.57126 15.3583 7.58173 15.2504 7.62177 15.1524C7.66181 15.0543 7.72961 14.9705 7.81661 14.9116C7.9036 14.8526 8.00588 14.8211 8.1105 14.8211C8.2508 14.8211 8.38535 14.8777 8.48456 14.9783C8.58376 15.0789 8.6395 15.2154 8.6395 15.3577Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M16.3129 15.3924C16.5784 15.3924 16.8379 15.3125 17.0587 15.1629C17.2794 15.0132 17.4515 14.8006 17.5531 14.5517C17.6547 14.3029 17.6813 14.0291 17.6295 13.765C17.5777 13.5008 17.4498 13.2582 17.2621 13.0677C17.0743 12.8773 16.8351 12.7476 16.5747 12.6951C16.3143 12.6425 16.0444 12.6695 15.7991 12.7725C15.5539 12.8756 15.3442 13.0501 15.1967 13.2741C15.0492 13.498 14.9705 13.7613 14.9705 14.0306C14.9705 14.3918 15.1119 14.7382 15.3636 14.9935C15.6154 15.2489 15.9568 15.3924 16.3129 15.3924ZM16.3129 13.4998C16.4177 13.4998 16.5202 13.5314 16.6073 13.5906C16.6944 13.6499 16.7622 13.734 16.8021 13.8324C16.842 13.9308 16.8521 14.039 16.8312 14.1432C16.8104 14.2475 16.7594 14.3431 16.6849 14.4179C16.6103 14.4927 16.5155 14.5434 16.4125 14.5634C16.3095 14.5835 16.203 14.572 16.1064 14.5305C16.0099 14.489 15.9277 14.4193 15.8702 14.3303C15.8128 14.2413 15.7827 14.137 15.7839 14.0306C15.7854 13.8893 15.8418 13.7543 15.9408 13.6549C16.0398 13.5555 16.1735 13.4998 16.3129 13.4998Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M11.6373 12.8247C11.9028 12.8247 12.1624 12.7448 12.3831 12.5952C12.6039 12.4455 12.7759 12.2329 12.8775 11.984C12.9791 11.7352 13.0057 11.4614 12.9539 11.1972C12.9021 10.9331 12.7743 10.6905 12.5865 10.5C12.3988 10.3096 12.1596 10.1799 11.8992 10.1273C11.6388 10.0748 11.3689 10.1018 11.1236 10.2048C10.8783 10.3079 10.6687 10.4824 10.5212 10.7064C10.3737 10.9303 10.2949 11.1936 10.2949 11.4629C10.2949 11.8241 10.4364 12.1704 10.6881 12.4258C10.9399 12.6812 11.2813 12.8247 11.6373 12.8247ZM11.6373 10.9263C11.7419 10.9263 11.8442 10.9578 11.9312 11.0167C12.0182 11.0757 12.086 11.1595 12.126 11.2576C12.1661 11.3556 12.1766 11.4635 12.1562 11.5676C12.1357 11.6717 12.0854 11.7673 12.0114 11.8424C11.9374 11.9174 11.8431 11.9685 11.7405 11.9892C11.6379 12.0099 11.5315 11.9993 11.4349 11.9587C11.3382 11.9181 11.2556 11.8493 11.1975 11.761C11.1394 11.6728 11.1083 11.569 11.1083 11.4629C11.1045 11.3901 11.1153 11.3172 11.1401 11.2487C11.165 11.1802 11.2033 11.1176 11.2528 11.0647C11.3024 11.0117 11.362 10.9696 11.4281 10.9409C11.4942 10.9121 11.5654 10.8973 11.6373 10.8974V10.9263Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M9.07764 20.5451C9.08323 20.7663 9.15301 20.9809 9.27824 21.1621C9.40346 21.3433 9.57859 21.483 9.78169 21.5638C9.9848 21.6446 10.2069 21.6628 10.4201 21.6161C10.6334 21.5695 10.8283 21.4602 10.9806 21.3017C11.1329 21.1433 11.2358 20.9428 11.2763 20.7253C11.3169 20.5079 11.2933 20.2832 11.2086 20.0792C11.1239 19.8753 10.9817 19.7013 10.8 19.5789C10.6183 19.4564 10.405 19.3911 10.1868 19.3911C9.89006 19.3986 9.60796 19.5235 9.40072 19.7391C9.19349 19.9547 9.07754 20.2439 9.07764 20.5451ZM10.1868 20.245C10.2453 20.245 10.3025 20.2626 10.3512 20.2956C10.3998 20.3286 10.4377 20.3754 10.4601 20.4302C10.4825 20.4851 10.4883 20.5454 10.4769 20.6036C10.4655 20.6618 10.4373 20.7153 10.396 20.7572C10.3546 20.7992 10.3019 20.8278 10.2445 20.8394C10.1872 20.8509 10.1277 20.845 10.0736 20.8223C10.0196 20.7996 9.97339 20.7611 9.94089 20.7118C9.90839 20.6624 9.89104 20.6044 9.89104 20.5451C9.89104 20.4655 9.9222 20.3892 9.97767 20.3329C10.0331 20.2766 10.1084 20.245 10.1868 20.245Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M14.4414 19.2929C14.6691 19.301 14.894 19.2394 15.0868 19.1163C15.2797 18.9932 15.4317 18.8142 15.523 18.6024C15.6144 18.3907 15.641 18.1559 15.5994 17.9287C15.5577 17.7014 15.4497 17.4921 15.2894 17.3278C15.1292 17.1635 14.9239 17.0519 14.7003 17.0073C14.4767 16.9627 14.2451 16.9872 14.0354 17.0777C13.8258 17.1682 13.6477 17.3205 13.5244 17.5149C13.401 17.7092 13.338 17.9367 13.3436 18.1678C13.3507 18.4619 13.4683 18.7423 13.6723 18.9514C13.8764 19.1606 14.1515 19.2827 14.4414 19.2929ZM14.4414 17.8677C14.5199 17.8677 14.5951 17.8993 14.6506 17.9556C14.706 18.0119 14.7372 18.0882 14.7372 18.1678C14.7372 18.2474 14.706 18.3237 14.6506 18.3799C14.5951 18.4362 14.5199 18.4678 14.4414 18.4678C14.3624 18.4678 14.2866 18.4364 14.2302 18.3803C14.1738 18.3242 14.1414 18.2479 14.1399 18.1678C14.1399 18.1279 14.1478 18.0884 14.163 18.0516C14.1782 18.0148 14.2005 17.9815 14.2286 17.9535C14.2566 17.9256 14.2899 17.9036 14.3265 17.8889C14.363 17.8742 14.4021 17.867 14.4414 17.8677Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M16.7851 9.98001C17.0101 9.98001 17.23 9.91233 17.4171 9.78552C17.6042 9.65872 17.75 9.47848 17.8361 9.26761C17.9222 9.05674 17.9448 8.82471 17.9009 8.60085C17.857 8.37699 17.7486 8.17136 17.5895 8.00997C17.4304 7.84858 17.2277 7.73867 17.007 7.69414C16.7863 7.64961 16.5576 7.67247 16.3497 7.75981C16.1419 7.84716 15.9642 7.99507 15.8392 8.18485C15.7142 8.37463 15.6475 8.59774 15.6475 8.82599C15.6475 9.13205 15.7673 9.42558 15.9807 9.642C16.194 9.85843 16.4834 9.98001 16.7851 9.98001ZM16.7851 8.55479C16.8291 8.54204 16.8754 8.53982 16.9205 8.54832C16.9655 8.55682 17.0079 8.5758 17.0445 8.60376C17.081 8.63173 17.1107 8.66792 17.1311 8.70949C17.1515 8.75105 17.1621 8.79686 17.1621 8.8433C17.1621 8.88974 17.1515 8.93554 17.1311 8.97711C17.1107 9.01868 17.081 9.05487 17.0445 9.08283C17.0079 9.1108 16.9655 9.12978 16.9205 9.13828C16.8754 9.14678 16.8291 9.14456 16.7851 9.1318C16.7411 9.14456 16.6947 9.14678 16.6497 9.13828C16.6047 9.12978 16.5623 9.1108 16.5257 9.08283C16.4892 9.05487 16.4595 9.01868 16.4391 8.97711C16.4187 8.93554 16.4081 8.88974 16.4081 8.8433C16.4081 8.79686 16.4187 8.75105 16.4391 8.70949C16.4595 8.66792 16.4892 8.63173 16.5257 8.60376C16.5623 8.5758 16.6047 8.55682 16.6497 8.54832C16.6947 8.53982 16.7411 8.54204 16.7851 8.55479Z"
                                        fill="#407BFF"
                                    />
                                    <path
                                        d="M5.66464 27.5904C5.61362 27.6142 5.56798 27.6485 5.53056 27.691C5.49314 27.7335 5.46475 27.7834 5.44714 27.8375C5.42954 27.8916 5.4231 27.9488 5.42822 28.0056C5.43335 28.0623 5.44993 28.1174 5.47693 28.1674C5.51189 28.2348 5.56421 28.2913 5.62831 28.3309C5.69242 28.3705 5.76591 28.3918 5.84097 28.3924C5.90399 28.3942 5.96647 28.3803 6.02299 28.352C7.76094 27.4488 9.68445 26.9744 11.6372 26.9672C13.7037 26.9977 15.7414 27.4634 17.6211 28.3347C17.6955 28.3741 17.78 28.3894 17.8632 28.3785C17.9464 28.3675 18.0243 28.331 18.0863 28.2737C18.1484 28.2164 18.1916 28.1412 18.2101 28.0582C18.2286 27.9752 18.2216 27.8884 18.1899 27.8096C18.1499 27.7073 18.0724 27.6246 17.9738 27.5788C15.9837 26.6554 13.8254 26.164 11.6372 26.1363C9.56136 26.1381 7.51519 26.6363 5.66464 27.5904Z"
                                        fill="#407BFF"
                                    />
                                </svg>
                                <span className={css.amount}>
                                    {record.value} ml
                                </span>
                                <span className={css.time}>{record.time}</span>
                            </div>
                            <div className={css.svgWrapper}>
                                <button
                                    className={css.editBtn}
                                    onClick={() => openEditModal(record)}
                                >
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.862 3.487L16.549 1.799C16.9007 1.44733 17.3777 1.24976 17.875 1.24976C18.3723 1.24976 18.8493 1.44733 19.201 1.799C19.5527 2.15068 19.7502 2.62766 19.7502 3.125C19.7502 3.62235 19.5527 4.09933 19.201 4.451L8.582 15.07C8.05332 15.5984 7.40137 15.9867 6.685 16.2L4 17L4.8 14.315C5.01328 13.5986 5.40163 12.9467 5.93 12.418L14.862 3.487ZM14.862 3.487L17.5 6.125M16 13V17.75C16 18.3467 15.7629 18.919 15.341 19.341C14.919 19.7629 14.3467 20 13.75 20H3.25C2.65326 20 2.08097 19.7629 1.65901 19.341C1.23705 18.919 1 18.3467 1 17.75V7.25C1 6.65327 1.23705 6.08097 1.65901 5.65901C2.08097 5.23706 2.65326 5 3.25 5H8"
                                            stroke="#9EBBFF"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className={css.deleteBtn}
                                    onClick={() =>
                                        openDeleteConfirmationModal(record.id)
                                    }
                                >
                                    <svg
                                        width="18"
                                        height="22"
                                        viewBox="0 0 18 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.74 8.00003L11.394 17M6.606 17L6.26 8.00003M16.228 4.79003C16.57 4.84203 16.91 4.89703 17.25 4.95603M16.228 4.79003L15.16 18.673C15.1164 19.2383 14.8611 19.7662 14.445 20.1513C14.029 20.5364 13.4829 20.7502 12.916 20.75H5.084C4.5171 20.7502 3.97102 20.5364 3.55498 20.1513C3.13894 19.7662 2.88359 19.2383 2.84 18.673L1.772 4.79003M16.228 4.79003C15.0739 4.61555 13.9138 4.48313 12.75 4.39303M1.772 4.79003C1.43 4.84103 1.09 4.89603 0.75 4.95503M1.772 4.79003C2.92613 4.61555 4.08623 4.48313 5.25 4.39303M12.75 4.39303V3.47703C12.75 2.29703 11.84 1.31303 10.66 1.27603C9.55362 1.24067 8.44638 1.24067 7.34 1.27603C6.16 1.31303 5.25 2.29803 5.25 3.47703V4.39303M12.75 4.39303C10.2537 4.20011 7.74628 4.20011 5.25 4.39303"
                                            stroke="#ef5050"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={openModalForAdd} className={css.addWaterBtn}>
                + Add Water
            </button>
            {isModalOpen && (
                <TodayListModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                    record={currentRecord}
                />
            )}
            {isEditModalOpen && (
                <EditWaterModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    record={currentRecord}
                    onSave={handleSave}
                />
            )}

            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteConfirmationModal}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default TodayWaterList;
