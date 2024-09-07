import styled from 'styled-components';
import sun from '../images/sun.png';
import moon from '../images/moon.png';
import clouds from '../images/cloudy.png';

export const SwitcherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitcherWrapp = styled.label`
  display: block;
  position: relative;
  width: 50px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */

  .switcher {
    height: 0;
    width: 0;
    opacity: 0;
  }

  .switcher-slider {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #d8f5ff;
    background-image: url(${clouds});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 10px;
    cursor: pointer;
    transition: background-image 350ms ease, background-color 350ms ease;
  }

  .switcher-slider::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6px; /* Position of the toggle knob */
    width: 24px;
    height: 24px;
    background-image: url(${sun});
    background-size: cover;
    border-radius: 50%;
    transition: transform 350ms ease, background-image 350ms ease;
  }

  .switcher:checked + .switcher-slider {
    background-color: #2f4e90;
    background-image: none; /* Optional: Remove clouds background */
  }

  .switcher:checked + .switcher-slider::before {
    transform: translateX(calc(100% - 30px)) translateY(-50%);
    background-image: url(${moon});
  }
`;
