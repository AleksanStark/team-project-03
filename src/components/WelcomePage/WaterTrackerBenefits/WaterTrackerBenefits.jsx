
import { useNavigate } from 'react-router-dom';
import {
  ContainerBenefits,
  WelcomeTitle,
  WelcomeInfoTitle,
  WelcomeListTitle,
  WelcomeListContent,
  WelcomeListItems,
  HabitDriveImg,
  ViewStatisticsImg,
  PersonalRateSettingImg,
  WelcomeButton,
} from './WaterTrackerBenefits.styled';

export const WaterTrackerBenefits = () => {
  const navigate = useNavigate();

  function TryClick() {
    navigate('/signup');
  }
  return (
    <ContainerBenefits>
      <WelcomeTitle>Water consumption tracker</WelcomeTitle>
      <WelcomeInfoTitle>Record daily water intake and track</WelcomeInfoTitle>
      <WelcomeListTitle>Tracker Benefits</WelcomeListTitle>
      <WelcomeListContent>
        <WelcomeListItems>
          <HabitDriveImg />
          <p>Habit drive</p>
        </WelcomeListItems>
        <WelcomeListItems>
          <ViewStatisticsImg />
          <p>View statistics</p>
        </WelcomeListItems>
        <WelcomeListItems>
          <PersonalRateSettingImg />
          <p>Personal rate setting</p>
        </WelcomeListItems>
      </WelcomeListContent>
      <WelcomeButton type="button" onClick={TryClick}>
        Try tracker
      </WelcomeButton>
    </ContainerBenefits>
  );
};