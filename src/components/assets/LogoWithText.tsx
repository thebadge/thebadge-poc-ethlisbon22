import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;

  .fill {
    fill: ${({ theme }) => theme.header.color};
  }
`

export const LogoWithText: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`logo ${className}`}
    fill="none"
    height="71"
    viewBox="0 0 212 71"
    width="212"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <rect fill="#24F3D2" height="71" rx="16" width="69.3405" />
    <path
      d="M54.9443 54.8079C55.4297 55.5139 55.0299 56.5141 54.2304 56.6612L49.2906 57.7202H49.2621L46.2639 62.4564C45.807 63.1624 44.8077 63.1918 44.3222 62.4858L36.4414 50.7778L47.092 43.1294L54.9443 54.8079Z"
      fill="#AF20AF"
    />
    <path
      d="M16.2064 54.8079C15.7203 55.5139 16.1206 56.5141 16.9214 56.6612L21.8687 57.7202H21.8973L24.9 62.4564C25.3576 63.1624 26.3585 63.1918 26.8447 62.4858L34.709 50.7778L24.0421 43.1294L16.2064 54.8079Z"
      fill="#AF20AF"
    />
    <path
      d="M14.351 31.6079C14.351 32.8009 11.8982 34.1822 12.0821 35.3124C12.2661 36.4426 15.0255 36.9449 15.3934 38.0122C15.7613 39.1424 13.8604 41.2144 14.351 42.219C14.9028 43.2236 17.6622 42.8469 18.3367 43.7259C19.0113 44.6677 17.8462 47.242 18.6433 48.0583C19.4405 48.9373 21.9546 47.6815 22.9357 48.3722C23.8555 49.0629 23.4876 51.8883 24.53 52.3906C25.5111 52.8929 27.5347 50.8837 28.6384 51.2604C29.6809 51.5744 30.2328 54.3998 31.3978 54.5882C32.5629 54.7765 33.8506 52.2022 34.9544 52.2022C36.1195 52.2022 37.4685 54.7137 38.5722 54.5254C39.676 54.337 40.1666 51.5116 41.209 51.1349C42.3127 50.7581 44.3363 52.7045 45.3174 52.2022C46.2985 51.6372 45.9306 48.8117 46.7891 48.121C47.7089 47.4304 50.223 48.6233 51.0201 47.8071C51.8173 46.9281 50.5909 44.3538 51.2654 43.412C51.9399 42.4702 54.6993 42.8469 55.1899 41.7795C55.6804 40.7749 53.7182 38.7029 54.0861 37.5727C54.3927 36.5053 57.1521 35.9403 57.3361 34.7473C57.52 33.5543 55.0059 32.2358 55.0059 31.1056C55.0059 29.9126 57.4587 28.5313 57.2748 27.4011C57.0908 26.271 54.3314 25.7687 53.9635 24.7013C53.5956 23.5711 55.4965 21.4991 55.0059 20.4945C54.454 19.4899 51.6947 19.8666 51.0201 18.9876C50.3456 18.0458 51.5107 15.4715 50.7135 14.6553C49.9164 13.839 47.4023 15.0948 46.4825 14.4669C45.5627 13.7762 45.9306 10.9508 44.8882 10.4485C43.9071 9.94618 41.8835 11.9554 40.7798 11.5787C39.7373 11.2647 39.1854 8.43928 38.0204 8.25092C36.8553 8.06255 35.5676 10.6369 34.4638 10.6369C33.2987 10.6369 31.9497 8.12535 30.846 8.31372C29.7422 8.50208 29.2516 11.3275 28.2092 11.7042C27.1055 12.081 25.0819 10.1346 24.1008 10.6369C23.1197 11.2019 23.4876 14.0274 22.6291 14.718C21.7093 15.4087 19.1952 14.2157 18.3981 15.032C17.6009 15.8482 18.8273 18.4225 18.2141 19.3643C17.5396 20.3061 14.7802 19.9294 14.2896 20.9968C13.7991 22.0014 15.7613 24.0734 15.3934 25.2036C15.0868 26.271 12.3274 26.8361 12.1434 28.029C11.8368 29.1592 14.2896 30.4777 14.351 31.6079Z"
      fill="#284EE8"
    />
    <g opacity="0.7">
      <ellipse
        cx="34.8823"
        cy="31.5969"
        fill="url(#paint0_linear_1388_6044)"
        rx="13.3423"
        ry="13.6616"
      />
      <ellipse cx="34.8823" cy="31.5969" fill="black" fillOpacity="0.2" rx="13.3423" ry="13.6616" />
    </g>
    <path
      d="M84.3836 24.3721V5.85002H78.7188V1.45496H94.6415V5.85002H88.9767V24.3721H84.3836Z"
      fill="white"
    />
    <path
      d="M97.8754 24.3721V1.45496H102.468V10.2451H107.613V1.45496H112.206V24.3721H107.613V14.6402H102.468V24.3721H97.8754Z"
      fill="white"
    />
    <path
      d="M116.665 24.3721V1.45496H130.444V5.4733H121.166V10.6218H129.372V14.6402H121.166V20.3537H130.444V24.3721H116.665Z"
      fill="white"
    />
    <path
      d="M80.5254 69.2197V34.844H91.3192C94.7181 34.844 97.428 35.6445 99.449 37.2456C101.47 38.8153 102.48 40.95 102.48 43.6498C102.48 45.1567 102.128 46.4752 101.424 47.6054C100.75 48.7356 99.8317 49.6146 98.6682 50.2424C97.5352 50.8703 96.295 51.1842 94.9477 51.1842V51.3255C96.4482 51.2941 97.8108 51.5767 99.0356 52.1731C100.291 52.7696 101.302 53.6643 102.067 54.8573C102.833 56.0502 103.215 57.5257 103.215 59.2837C103.215 61.2929 102.741 63.0509 101.791 64.5578C100.873 66.0333 99.5562 67.1791 97.8414 67.9954C96.1266 68.8116 94.0904 69.2197 91.7326 69.2197H80.5254ZM87.1854 63.5218H91.457C92.9574 63.5218 94.1363 63.1137 94.9937 62.2975C95.851 61.4813 96.2797 60.3511 96.2797 58.907C96.2797 57.4629 95.851 56.3327 94.9937 55.5165C94.1363 54.6689 92.9574 54.2451 91.457 54.2451H87.1854V63.5218ZM87.1854 48.6885H91.2273C92.5746 48.6885 93.631 48.3274 94.3966 47.6054C95.1621 46.852 95.5448 45.8474 95.5448 44.5916C95.5448 43.3045 95.1621 42.3156 94.3966 41.625C93.631 40.9029 92.5746 40.5419 91.2273 40.5419H87.1854V48.6885Z"
      fill="white"
    />
    <path
      d="M106.183 69.2197L114.405 34.844H123.131L131.445 69.2197H124.418L122.81 61.4499H114.818L113.21 69.2197H106.183ZM115.966 55.7991H121.616L120.008 47.5112C119.794 46.3183 119.564 45.141 119.319 43.9795C119.105 42.7865 118.936 41.8604 118.814 41.2012C118.691 41.8604 118.523 42.7708 118.309 43.9324C118.125 45.0939 117.911 46.2712 117.666 47.4641L115.966 55.7991Z"
      fill="white"
    />
    <path
      d="M135.469 69.2197V34.844H146.355C148.682 34.844 150.703 35.2992 152.418 36.2096C154.163 37.12 155.51 38.4071 156.46 40.071C157.439 41.7034 157.929 43.6341 157.929 45.8631V58.1536C157.929 60.3511 157.439 62.2818 156.46 63.9456C155.51 65.6095 154.163 66.9123 152.418 67.8541C150.703 68.7645 148.682 69.2197 146.355 69.2197H135.469ZM142.359 62.6271H146.355C147.763 62.6271 148.896 62.219 149.754 61.4028C150.611 60.5865 151.04 59.5035 151.04 58.1536V45.8631C151.04 44.5446 150.611 43.4772 149.754 42.661C148.896 41.8447 147.763 41.4366 146.355 41.4366H142.359V62.6271Z"
      fill="white"
    />
    <path
      d="M174.079 69.6906C171.844 69.6906 169.884 69.2668 168.2 68.4192C166.516 67.5402 165.199 66.3315 164.25 64.7933C163.331 63.2236 162.872 61.4028 162.872 59.3308V44.7329C162.872 42.6296 163.331 40.8087 164.25 39.2705C165.199 37.7322 166.516 36.5392 168.2 35.6916C169.884 34.8126 171.844 34.3731 174.079 34.3731C176.345 34.3731 178.305 34.8126 179.958 35.6916C181.642 36.5392 182.944 37.7322 183.862 39.2705C184.812 40.8087 185.286 42.6296 185.286 44.7329H178.397C178.397 43.3516 178.014 42.2999 177.248 41.5779C176.513 40.8558 175.457 40.4948 174.079 40.4948C172.701 40.4948 171.629 40.8558 170.864 41.5779C170.129 42.2999 169.762 43.3516 169.762 44.7329V59.3308C169.762 60.6807 170.129 61.7324 170.864 62.4858C171.629 63.2079 172.701 63.5689 174.079 63.5689C175.457 63.5689 176.513 63.2079 177.248 62.4858C178.014 61.7324 178.397 60.6807 178.397 59.3308V56.3641H173.436V50.3837H185.286V59.3308C185.286 61.4028 184.812 63.2236 183.862 64.7933C182.944 66.3315 181.642 67.5402 179.958 68.4192C178.305 69.2668 176.345 69.6906 174.079 69.6906Z"
      fill="white"
    />
    <path
      d="M191.331 69.2197V34.844H212V40.8715H198.083V48.5943H210.393V54.6218H198.083V63.1922H212V69.2197H191.331Z"
      fill="white"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_1388_6044"
        x1="34.8823"
        x2="34.8823"
        y1="17.9353"
        y2="45.2585"
      >
        <stop stopColor="#284EE8" />
        <stop offset="0.813663" stopColor="#62CBA5" />
      </linearGradient>
    </defs>
  </Wrapper>
)
