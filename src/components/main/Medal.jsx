import React from "react";
import styled from "styled-components";

const MedalWrapper = styled.div`
  width: 81px;
  height: 84px;
`;

const Medal = ({ number }) => {
  return (
    <MedalWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="81"
        height="84"
        viewBox="0 0 81 84"
        fill="none"
      >
        <g filter="url(#filter0_d_525_4695)">
          <path
            d="M18.595 27.1285C23.1322 22.5322 29.1178 19.3574 35.8159 18.337L29.175 7.81785C27.6551 5.41032 24.9992 3.94922 22.1428 3.94922H7.02963C5.37371 3.94922 4.38402 5.78423 5.29882 7.15824L18.595 27.1285Z"
            fill="white"
          />
          <path
            d="M45.252 18.3476C51.9444 19.3829 57.9216 22.5694 62.4487 27.1747L73.639 10.3673C75.5208 7.54091 76.4617 6.12772 75.8743 5.03847C75.287 3.94922 73.5837 3.94922 70.1776 3.94922H63.5215C59.0335 3.94922 56.7895 3.94922 54.9144 4.98072C53.0394 6.01222 51.8453 7.90368 49.4571 11.6865L45.252 18.3476Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.4985 75.05C55.1976 75.05 67.1136 63.1878 67.1136 48.5554C67.1136 33.9226 55.1976 22.0605 40.4985 22.0605C25.7996 22.0605 13.8838 33.9226 13.8838 48.5554C13.8838 63.1878 25.7996 75.05 40.4985 75.05Z"
            fill="white"
          />
          {/* 숫자 표시 */}
          <text
            x="40.5"
            y="58"
            textAnchor="middle"
            fontSize="30"
            style={{
              fontFamily: "SUIT-ExtraBold,Arial, sans-serif",
            }}
            fill="#f27777"
          >
            {number}
          </text>
        </g>
        <defs>
          <filter
            id="filter0_d_525_4695"
            x="-3"
            y="0"
            width="87"
            height="87"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_525_4695"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_525_4695"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </MedalWrapper>
  );
};

export default Medal;
