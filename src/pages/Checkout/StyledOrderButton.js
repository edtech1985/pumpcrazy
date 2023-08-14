import styled, { keyframes } from "styled-components";

export const OrderButton = styled.button`
  appearance: none;
  border: 0;
  background: var(--dark);
  position: relative;
  height: 63px;
  width: 240px;
  padding: 0;
  outline: none;
  cursor: pointer;
  border-radius: 32px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.96);
  }
`;

export const OrderSpan = styled.span`
  --o: 1;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 19px;
  line-height: 24px;
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  opacity: var(--o);
  transition: opacity 0.3s ease;

  &.default {
    transition-delay: 0.3s;
  }

  &.success {
    --offset: 16px;
    --o: 0;
  }
`;

export const OrderSvg = styled.svg`
  width: 12px;
  height: 10px;
  display: inline-block;
  vertical-align: top;
  fill: none;
  margin: 7px 0 0 4px;
  stroke: var(--green);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: var(--offset);
  transition: stroke-dashoffset 0.3s ease;
`;

export const animateTruck = keyframes`
  10%, 30% {
    transform: translateX(-164px);
  }
  40% {
    transform: translateX(-104px);
  }
  60% {
    transform: translateX(-224px);
  }
  75%, 100% {
    transform: translateX(24px);
  }
`;

export const animateLines = keyframes`
  0%, 30% {
    opacity: 0;
    transform: scaleY(0.7) translateX(0);
  }
  35%, 65% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: scaleY(0.7) translateX(-400px);
  }
`;

export const AnimateBox = keyframes`
  8%, 10% {
    transform: translateX(40px);
    opacity: 1;
  }
  25% {
    transform: translateX(112px);
    opacity: 1;
  }
  26% {
    transform: translateX(112px);
    opacity: 0;
  }
  27%, 100% {
    transform: translateX(0px);
    opacity: 0;
  }
`;

export const AnimatedOrderButton = styled(OrderButton)`
  &.animate .default {
    --o: 0;
    transition-delay: 0s;
  }

  &.animate .success {
    --offset: 0;
    --o: 1;
    transition-delay: 7s;
  }

  &.animate .success ${OrderSvg} {
    transition-delay: 7.3s;
  }

  &.animate .truck {
    animation: ${animateTruck} 10s ease forwards;
  }

  &.animate .box {
    animation: ${AnimateBox} 10s ease forwards;
  }

  &.animate .lines {
    animation: ${animateLines} 10s ease forwards;
  }
`;
