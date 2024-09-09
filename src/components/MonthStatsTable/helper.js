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

export const leftPart = [
  1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31,
];
export const rightPart = [
  6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30,
];

export const firstColumn = [1, 11, 21, 31];
export const secondColumn = [2, 12, 22];
export const thirdColumn = [3, 13, 23];
export const fourthColumn = [4, 14, 24];
export const fifthColumn = [5, 15, 25];
