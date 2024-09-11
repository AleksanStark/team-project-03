import {
  eighthColumn,
  fifthColumn,
  firstColumn,
  fourthColumn,
  mobileFifthColumn,
  mobileFirstColumn,
  mobileFourthColumn,
  mobileSecondColumn,
  mobileThirdColumn,
  ninthColumn,
  secondColumn,
  seventhColumn,
  sixthColumn,
  tenthColumn,
  thirdColumn,
} from "../helper";
import style from "./PopupItem.module.css";
import clsx from "clsx";

const PopupItem = ({ children, closeModal, index }) => {
  const containerClass = clsx(style.popup, {
    [style.firstColumn]: firstColumn.includes(index + 1),
    [style.secondColumn]: secondColumn.includes(index + 1),
    [style.thirdColumn]: thirdColumn.includes(index + 1),
    [style.fourthColumn]: fourthColumn.includes(index + 1),
    [style.fifthColumn]: fifthColumn.includes(index + 1),
    [style.sixthColumn]: sixthColumn.includes(index + 1),
    [style.seventhColumn]: seventhColumn.includes(index + 1),
    [style.eighthColumn]: eighthColumn.includes(index + 1),
    [style.ninthColumn]: ninthColumn.includes(index + 1),
    [style.tenthColumn]: tenthColumn.includes(index + 1),
    [style.mobileFirstColumn]: mobileFirstColumn.includes(index + 1),
    [style.mobileSecondColumn]: mobileSecondColumn.includes(index + 1),
    [style.mobileThirdColumn]: mobileThirdColumn.includes(index + 1),
    [style.mobileFourthColumn]: mobileFourthColumn.includes(index + 1),
    [style.mobileFifthColumn]: mobileFifthColumn.includes(index + 1),
  });

  return (
    <div className={containerClass} onMouseLeave={closeModal}>
      {children}
    </div>
  );
};

export default PopupItem;
