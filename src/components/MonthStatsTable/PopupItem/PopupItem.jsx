import {
  fifthColumn,
  firstColumn,
  fourthColumn,
  leftPart,
  rightPart,
  secondColumn,
  thirdColumn,
} from "../helper";
import style from "./PopupItem.module.css";
import clsx from "clsx";

// const getType = () => {
//   const width = document.body.getBoundingClientRect().width;
//   if (width >= 1440) {
//     return "Desktop";
//   } else if (width >= 768) {
//     return "Tablet";
//   } else return "Mobile";
// };

// const getStyle = (device, index) => {
//   if (device === "Mobile") {
//     return {
//       transform: "translate(24%, -65%)",
//     };
//   } else if (device === "Tablet") {
//     const i = index.toString().slice(-1) * 1 + 1;
//     const side = i <= 6;
//     if (side) {
//       return { transform: "translate(-44%, -70%)" };
//     } else {
//       return { transform: "translate(44%, -70%)" };
//     }
//   } else {
//     const i = index.toString().slice(-1) * 1 + 1;
//     const side = i <= 6;
//     if (side) {
//       return { transform: "translate(-44%, -70%)" };
//     } else {
//       return { transform: "translate(44%, -70%)" };
//     }
//   }
// };

const PopupItem = ({ children, closeModal, index }) => {
  //   const device = getType();
  //   const customStyle = getStyle(device, index + 1);
  console.log(index);
  const containerClass = clsx(style.popup, {
    [style.rightPart]: rightPart.includes(index + 1),
    [style.leftPart]: leftPart.includes(index + 1),
    [style.firstColumn]: firstColumn.includes(index + 1),
    [style.secondColumn]: secondColumn.includes(index + 1),
    [style.thirdColumn]: thirdColumn.includes(index + 1),
    [style.fourthColumn]: fourthColumn.includes(index + 1),
    [style.fifthColumn]: fifthColumn.includes(index + 1),
  });

  return (
    // <div className={style.popup} style={customStyle} onMouseLeave={closeModal}>
    //   {children}
    // </div>
    <div className={containerClass} onMouseLeave={closeModal}>
      {children}
    </div>
  );
};

export default PopupItem;
