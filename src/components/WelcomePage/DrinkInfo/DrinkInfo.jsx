import {
  ContainerDrinkInfo,
  DrinkInfoTitle,
  DrinkInfoList,
  DrinkInfoItems,
} from './DrinkInfo.styled';

export const DrinkInfo = () => {
  return (
    <>
      <ContainerDrinkInfo>
        <DrinkInfoTitle>Why drink water</DrinkInfoTitle>
        <DrinkInfoList>
          <DrinkInfoItems>Supply of nutrients to all organs</DrinkInfoItems>
          <DrinkInfoItems>Providing oxygen to the lungs</DrinkInfoItems>
          <DrinkInfoItems>Maintaining the work of the heart</DrinkInfoItems>
          <DrinkInfoItems>Release of processed substances</DrinkInfoItems>
          <DrinkInfoItems>
            Ensuring the stability of the internal environment
          </DrinkInfoItems>
          <DrinkInfoItems>
            Maintaining within the normal temperature
          </DrinkInfoItems>
          <DrinkInfoItems>
            Maintaining an immune system capable of resisting disease
          </DrinkInfoItems>
        </DrinkInfoList>
      </ContainerDrinkInfo>
    </>
  );
};