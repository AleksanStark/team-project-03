import styled from 'styled-components';
import { ReactComponent as CalendarIconSvg } from '../../../images/welcome/icons/calendar.svg';
import { ReactComponent as SettingsIconSvg } from '../../../images/welcome/icons/settings.svg';
import { ReactComponent as StatisticsIconSvg } from '../../../images/welcome/icons/statistics.svg';
import { baseTheme } from '../../theme';

export const ContainerBenefits = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 185px;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${baseTheme.colors.black};
  line-height: calc(32 / 28);
  text-align: left;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: calc(42 / 36);
  }
`;

export const WelcomeInfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${baseTheme.colors.black};
  line-height: calc(30 / 24);
  text-align: left;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`;

export const WelcomeListTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${baseTheme.colors.black};
  line-height: calc(20 / 18);
  text-align: left;
  margin-bottom: 12px;
  
`;

export const WelcomeListContent = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WelcomeListItems = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  & p {
    font-size: 18px;
    line-height: calc(20 / 16);
  }

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const HabitDriveImg = styled(CalendarIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const ViewStatisticsImg = styled(StatisticsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const PersonalRateSettingImg = styled(SettingsIconSvg)`
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const WelcomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 8px 30px;
  width: 280px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: ${baseTheme.colors.white};
  background-color: ${baseTheme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow ${baseTheme.animation.duration} ${baseTheme.animation.cubicBezier};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: ${baseTheme.colors.violet};
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    line-height: calc(24 / 18);
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;