import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;

  .fill {
    fill: ${({ theme }) => theme.header.color};
  }
`

export const Logo: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`logo ${className}`}
    height="226"
    viewBox="0 0 226 226"
    width="226"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <g filter="url(#filter0_d_846_6081)" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M175.683 0H50.0047C24.597 0 4 20.5969 4 46.0046V171.683C4 197.091 24.597 217.688 50.0047 217.688H175.683C201.091 217.688 221.688 197.091 221.688 171.683V46.0046C221.688 20.5969 201.091 0 175.683 0Z"
        fill="url(#paint0_linear_846_6081)"
      />
      <g filter="url(#filter1_d_846_6081)">
        <path
          d="M170.391 163.912C171.792 165.901 170.638 168.72 168.331 169.134L154.077 172.119H153.995L145.343 185.466C144.025 187.455 141.141 187.538 139.741 185.549L117 152.554L147.733 131L170.391 163.912Z"
          fill="#AF20AF"
        />
      </g>
      <g filter="url(#filter2_d_846_6081)">
        <path
          d="M58.6097 163.912C57.2069 165.901 58.3622 168.72 60.6727 169.134L74.9487 172.119H75.0312L83.6957 185.466C85.0161 187.455 87.9042 187.538 89.3071 185.549L112 152.554L81.2201 131L58.6097 163.912Z"
          fill="#AF20AF"
        />
      </g>
      <g filter="url(#filter3_d_846_6081)">
        <g filter="url(#filter4_d_846_6081)">
          <path
            d="M55.1198 83.3088C54.2497 86.5562 46.4057 88.4844 46.0941 91.6983C45.7825 94.9121 53.1072 98.3402 53.3541 101.521C53.5553 104.872 46.7457 109.092 47.3803 112.193C48.1857 115.34 56.1516 116.375 57.3905 119.272C58.5836 122.339 53.4586 128.477 55.0851 131.294C56.6658 134.282 64.5892 132.741 66.82 135.354C68.88 137.921 65.7937 145.338 68.3328 147.483C70.7011 149.583 77.8067 145.625 80.6083 147.475C83.2849 149.108 82.7622 157.212 85.8722 158.595C88.9822 159.977 94.449 153.932 97.5254 154.756C100.773 155.626 102.701 163.47 105.915 163.782C109.129 164.093 112.557 156.769 115.737 156.522C119.088 156.32 123.309 163.13 126.41 162.495C129.556 161.69 130.592 153.724 133.488 152.485C136.556 151.292 142.693 156.417 145.51 154.791C148.373 152.993 146.833 145.07 149.4 143.01C151.967 140.95 159.383 144.036 161.529 141.497C163.629 139.129 159.671 132.023 161.521 129.221C163.154 126.545 171.257 127.067 172.64 123.957C174.023 120.848 167.977 115.381 168.801 112.304C169.672 109.057 177.516 107.129 177.827 103.915C178.139 100.701 170.814 97.2728 170.567 94.0925C170.366 90.7413 177.176 86.5208 176.541 83.4198C175.736 80.273 167.77 79.2377 166.531 76.3411C165.338 73.2737 170.463 67.1363 168.836 64.3191C167.21 61.5019 159.286 63.0425 157.181 60.6464C155.121 58.0794 158.207 50.6631 155.668 48.5173C153.3 46.4172 146.194 50.3752 143.392 48.5254C140.716 46.8923 141.238 38.789 138.128 37.4061C135.018 36.0233 129.552 42.069 126.475 41.2447C123.228 40.3746 121.3 32.5305 118.086 32.2189C114.872 31.9073 111.444 39.2321 108.264 39.479C104.912 39.6802 100.692 32.8706 97.5909 33.5052C94.4441 34.3107 93.4088 42.2766 90.5122 43.5155C87.4448 44.7086 81.3075 39.5836 78.4903 41.2101C75.6731 42.8366 77.2137 50.76 74.8176 52.8658C72.2506 54.9257 64.8343 51.8394 62.6885 54.3786C60.5884 56.7468 64.5464 63.8525 62.6966 66.6541C61.0635 69.3307 52.9602 68.8081 51.5774 71.9181C49.8985 74.7656 55.7733 80.1866 55.1198 83.3088Z"
            fill="#284EE8"
          />
        </g>
      </g>
      <g opacity="0.7">
        <circle cx="112.5" cy="98.5" fill="url(#paint1_linear_846_6081)" r="38.5" />
        <circle cx="112.5" cy="98.5" fill="black" fillOpacity="0.2" r="38.5" />
      </g>
    </g>
    <defs xmlns="http://www.w3.org/2000/svg">
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="225.688"
        id="filter0_d_846_6081"
        width="225.688"
        x="0"
        y="0"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_846_6081" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_846_6081"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="64"
        id="filter1_d_846_6081"
        width="62"
        x="113"
        y="131"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_846_6081" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_846_6081"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="64"
        id="filter2_d_846_6081"
        width="62"
        x="54"
        y="131"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_846_6081" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_846_6081"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="139.582"
        id="filter3_d_846_6081"
        width="139.753"
        x="42.0844"
        y="32.2092"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_846_6081" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_846_6081"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="135.582"
        id="filter4_d_846_6081"
        width="135.753"
        x="44.0844"
        y="30.2092"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_846_6081" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_846_6081"
          mode="normal"
          result="shape"
        />
      </filter>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_846_6081"
        x1="194.206"
        x2="-36.4694"
        y1="199.649"
        y2="-58.0061"
      >
        <stop offset="0.635417" stopColor="#24F3D2" />
        <stop offset="1" stopColor="#24F3D2" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear_846_6081"
        x1="112.5"
        x2="112.5"
        y1="60"
        y2="137"
      >
        <stop stopColor="#284EE8" />
        <stop offset="0.813663" stopColor="#62CBA5" />
      </linearGradient>
    </defs>
  </Wrapper>
)
