import styled from 'styled-components';
import { baseTheme } from 'components/theme';
import { Form, ErrorMessage, Field } from 'formik';
import bottleDesk1x from '../../images/home/bottle-desk-1x.png';
import bottleDesk2x from '../../images/home/bottle-desk-2x.png';
import bottleMob1x from '../../images/home/bottle-mob-1x.png';
import bottleMob2x from '../../images/home/bottle-mob-2x.png';
import bottleTab1x from '../../images/home/bottle-tab-1x.png';
import bottleTab2x from '../../images/home/bottle-tab-2x.png';

export const BottleImg = styled.div`
  background-image: url(${bottleMob1x});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;
  margin-top: -26px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bottleMob2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 0;
    width: 736px;
    height: 548px;
    background-position: 80px;
    background-image: url(${bottleTab1x});
    z-index: -1;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bottleTab2x});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
    background-image: url(${bottleDesk1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bottleDesk2x});
  }
`;

export const SignUpContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

export const FormHead = styled.h2`
  color: ${baseTheme.colors.black};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 280px;

  & h2 {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: auto;
    width: 336px;
    /* z-index: 100; */
  }

  @media screen and (min-width: 1440px) {
    position: static;
    width: 384px;
    margin-top: 113px;
    margin-right: 198px;
  }
`;

export const ErMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: ${baseTheme.colors.red};
  margin-top: 4px;  /* Adjust space between field and error message */
`;

export const StyledField = styled(Field)`
  margin-top: 8px;
  display: flex;
  padding: 12px 10px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  outline: none;
  border-radius: 6px;
  border: 1px solid
    ${({ error }) =>
      error === 'true' ? baseTheme.colors.red : baseTheme.colors.violet_light};
  background: ${baseTheme.colors.white};
  &::placeholder {
    color: #9EBBFF; // Placeholder text color
    font-size: 16px;
    font-weight: 400;
    line-height: 1.23;
  }
`;

export const FormBtnStyled = styled.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${baseTheme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  outline: none;
  border: none;
  color: ${baseTheme.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
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
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const GoogleBtnStyled = styled.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 30px;
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

  & .google-icon {
    width: 24px;
    height: 24px;
  }
`;

export const Styledlabel = styled.label`
  margin-top: 16px;
  color: ${baseTheme.colors.black};
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const SightUp = styled.p`
  margin-top: 16px;
  color: ${baseTheme.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  cursor: pointer;
  transition: color 250ms ${baseTheme.cubicBezier};

  &:hover {
    color: ${baseTheme.colors.orange};
  }
`;

export const StyledBtn = styled.div`
  position: absolute;
  border: none;
  top: calc(50% + 34px);
  right: 4%;
  cursor: pointer;

  & svg {
    width: 24px;  // Increased size for visibility
    height: 24px; // Increased size for visibility
  }

  & use {
    fill: #9EBBFF; // Color for eye icons
  }
`;
