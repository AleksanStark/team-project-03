import styled from 'styled-components';
import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';
import { baseTheme } from 'components/theme'; // Make sure this path is correct

export const PageContainer = styled.div`
  height: 90vh;

  @media screen and (min-width: 768px) {
    height: 92vh;
  }
`;

export const SignUpSection = styled.section`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    z-index: -2;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 18px;
  }
`;

export const BubblesContainer = styled.div`
  background-position: center 28px;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    background-size: contain;
    background-repeat: repeat;
  }
`;

export const GoogleBtnStyled = styled.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #4285f4;  // Google Blue Color
  color: ${baseTheme.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background 0.3s ease;

  &:hover {
    background: #357ae8;  // Darker Google Blue Color
  }

  &:active {
    background: #3367d6;  // Even Darker Google Blue Color
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
