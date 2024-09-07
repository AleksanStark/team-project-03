import styled from 'styled-components';

import bg_mb1x from '../../../images/welcome/bg-mb1x.png';
import bg_mb2x from '../../../images/welcome/bg-mb2x.png';
import bg_tb1x from '../../../images/welcome/bg-tb2x.png';
import bg_tb2x from '../../../images/welcome/bg-tb2x.png';
import bg_dt1x from '../../../images/welcome/bg-dt2x.png';
import bg_dt2x from '../../../images/welcome/bg-dt2x.png';
import backgroundMobile from '../../../images/welcome/backgroundMobileHome.svg';
import backgroundTablet from '../../../images/welcome/backgroundTablet.svg';
import backgroundDesktop from '../../../images/welcome/backgroundDesktop.svg';

export const WelcomeContainer = styled.div`
  background-image: url(${backgroundMobile}), url(${bg_mb1x});
  background-size: contain;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundMobile}), url(${bg_mb2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${backgroundTablet}), url(${bg_tb1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundTablet}), url(${bg_tb2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop}), url(${bg_dt1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundDesktop}), url(${bg_dt2x});
  }
`;