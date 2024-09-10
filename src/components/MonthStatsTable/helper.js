import { useState } from "react";

export const formatDate = (date) => {
  const year = date.getFullYear();
  const mongth = getMonthName(date.getMonth());

  return `${mongth}, ${year}`;
};

function getMonthName(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthNumber] || "January";
}

export const useModal = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return [modalState, openModal, closeModal];
};

export const mobileFirstColumn = [1, 6, 11, 16, 21, 26, 31];
export const mobileSecondColumn = [2, 7, 12, 17, 22, 27];
export const mobileThirdColumn = [3, 8, 13, 18, 23, 28];
export const mobileFourthColumn = [4, 9, 14, 19, 24, 29];
export const mobileFifthColumn = [5, 10, 15, 20, 25, 30];

export const firstColumn = [1, 11, 21, 31];
export const secondColumn = [2, 12, 22];
export const thirdColumn = [3, 13, 23];
export const fourthColumn = [4, 14, 24];
export const fifthColumn = [5, 15, 25];
export const sixthColumn = [6, 16, 26];
export const seventhColumn = [7, 17, 27];
export const eighthColumn = [8, 18, 28];
export const ninthColumn = [9, 19, 29];
export const tenthColumn = [10, 20, 30];
