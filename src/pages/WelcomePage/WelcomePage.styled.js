import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 320px;
  min-height: calc(100vh - 80px);
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding: 0 32px 50px 32px;
    min-height: calc(100vh - 88px);
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 81px;
    width: 1440px;
    padding: 0 18px 109px 18px;
    padding-top: 40px;
    min-height: calc(100vh - 80px);
  }
`;