"use client";
import React from "react";

const Travelpoint = () => {
  return (
    <>
      <div
        id="travelpoint_section"
        className="flex items-center flex-wrap justify-between m-auto mt-[10rem]"
      >
        <div id="travelpoint_leftsetion " className="relative">
          <div className="relative z-10 ml-28">
            <img
              src="./images/travelpointgirl.png"
              className="lg:w-[36.25vw] lg:h-[36.25vw] scale-x-[-1] "
            />
          </div>
          <div
            className="absolute lg:block bottom-4 z-0 w-[20%] h-200 lg:w-[36.71vw] lg:h-[28.64vw] "
            id="left_yellowSvg "
          >
            <div id="lY" className=""></div>
            {/* <div className="" id="ylimg">
              <img src="./images/yelloimg2.png" />
            </div> */}
            <div
              id="svg_bigpurple"
              className="absolute top-[-8rem] left-[18rem] lg:left-[43rem]"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_832_1060)">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="url(#paint0_linear_832_1060)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_832_1060"
                    x="0"
                    y="0"
                    width="120"
                    height="120"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      result="effect1_foregroundBlur_832_1060"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_832_1060"
                    x1="98.4"
                    y1="115.68"
                    x2="3.04028"
                    y2="97.4235"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5D50C6" />
                    <stop offset="1" stop-color="#F85E9F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              id="svg_smallpurple"
              className="absolute top-[-1.5rem] left-36"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_832_1061)">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="url(#paint0_linear_832_1061)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_832_1061"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_832_1061"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_832_1061"
                    x1="40"
                    y1="47.2"
                    x2="0.266783"
                    y2="39.5931"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5D50C6" />
                    <stop offset="1" stop-color="#F85E9F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              id="discount_svg"
              className="absolute lg:top-[-1.3rem] lg:right-[-11.5rem] z-10 right-[-18rem] top-[-10rem]"
            >
              <svg
                width="466"
                height="313"
                viewBox="0 0 466 313"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dddd_832_1086)">
                  <rect
                    x="83"
                    y="19"
                    width="300"
                    height="72"
                    rx="36"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M148.999 50.2433L150.199 51.4433C151.15 52.3767 151.666 53.6433 151.666 54.9767C151.683 56.31 151.166 57.5783 150.233 58.5267C150.221 58.5388 150.21 58.5497 150.199 58.5603C150.194 58.5657 150.188 58.5712 150.182 58.5767L148.999 59.76C148.532 60.2267 148.265 60.86 148.265 61.5283V63.2433C148.265 66.01 146.014 68.2617 143.247 68.2617H141.529C140.862 68.2617 140.229 68.5267 139.762 68.9933L138.562 70.1933C137.578 71.1783 136.294 71.66 135.01 71.66C133.727 71.66 132.443 71.1783 131.459 70.2117L130.242 68.9933C129.775 68.5267 129.141 68.2617 128.475 68.2617H126.757C123.99 68.2617 121.739 66.01 121.739 63.2433V61.5283C121.739 60.86 121.472 60.2267 121.005 59.7433L119.805 58.56C117.854 56.6117 117.837 53.4267 119.788 51.4616L121.005 50.2433C121.472 49.7766 121.739 49.1433 121.739 48.46V46.76C121.739 43.9933 123.99 41.745 126.757 41.745H128.475C129.141 41.745 129.775 41.4766 130.242 41.01L131.442 39.81C133.393 37.845 136.578 37.845 138.545 39.795L139.762 41.01C140.229 41.4766 140.862 41.745 141.529 41.745H143.247C146.014 41.745 148.265 43.9933 148.265 46.76V48.4783C148.265 49.1433 148.532 49.7766 148.999 50.2433ZM130.709 60.7433C131.109 60.7433 131.476 60.5933 131.742 60.31L140.312 51.745C140.879 51.1783 140.879 50.2433 140.312 49.6766C139.745 49.1116 138.828 49.1116 138.262 49.6766L129.692 58.2433C129.125 58.81 129.125 59.7433 129.692 60.31C129.958 60.5933 130.325 60.7433 130.709 60.7433ZM137.828 59.2767C137.828 60.0933 138.478 60.7433 139.295 60.7433C140.095 60.7433 140.746 60.0933 140.746 59.2767C140.746 58.4783 140.095 57.8267 139.295 57.8267C138.478 57.8267 137.828 58.4783 137.828 59.2767ZM130.725 49.26C131.526 49.26 132.176 49.91 132.176 50.71C132.176 51.5283 131.526 52.1767 130.725 52.1767C129.925 52.1767 129.258 51.5283 129.258 50.71C129.258 49.91 129.925 49.26 130.725 49.26Z"
                    fill="#FF5722"
                  />
                  <path
                    d="M172.771 63V46.785H178.797C181.511 46.785 183.604 47.4827 185.076 48.878C186.563 50.2733 187.307 52.2743 187.307 54.881C187.307 57.4723 186.563 59.4733 185.076 60.884C183.604 62.2947 181.511 63 178.797 63H172.771ZM175.715 60.562H178.613C182.354 60.562 184.225 58.6683 184.225 54.881C184.225 51.109 182.354 49.223 178.613 49.223H175.715V60.562ZM189.831 49.338V46.532H193.051V49.338H189.831ZM190.015 63V51.753H192.89V63H190.015ZM199.994 63.23C199.043 63.23 198.154 63.115 197.326 62.885C196.498 62.655 195.808 62.3253 195.256 61.896L195.992 60.01C196.559 60.3933 197.196 60.6923 197.901 60.907C198.606 61.1063 199.312 61.206 200.017 61.206C200.753 61.206 201.297 61.0833 201.65 60.838C202.018 60.5773 202.202 60.24 202.202 59.826C202.202 59.182 201.727 58.768 200.776 58.584L198.476 58.147C196.529 57.779 195.555 56.767 195.555 55.111C195.555 54.375 195.754 53.7387 196.153 53.202C196.567 52.6653 197.134 52.2513 197.855 51.96C198.576 51.6687 199.404 51.523 200.339 51.523C201.136 51.523 201.903 51.638 202.639 51.868C203.375 52.0827 204.004 52.4123 204.525 52.857L203.743 54.743C203.298 54.375 202.762 54.0837 202.133 53.869C201.52 53.6543 200.929 53.547 200.362 53.547C199.611 53.547 199.051 53.6773 198.683 53.938C198.33 54.1987 198.154 54.5437 198.154 54.973C198.154 55.6477 198.591 56.0617 199.465 56.215L201.765 56.652C202.762 56.836 203.513 57.1733 204.019 57.664C204.54 58.1547 204.801 58.814 204.801 59.642C204.801 60.7613 204.364 61.643 203.49 62.287C202.616 62.9157 201.451 63.23 199.994 63.23ZM212.305 63.23C211.125 63.23 210.097 62.9923 209.223 62.517C208.349 62.0263 207.675 61.3363 207.199 60.447C206.724 59.5577 206.486 58.515 206.486 57.319C206.486 56.123 206.724 55.0957 207.199 54.237C207.675 53.363 208.349 52.696 209.223 52.236C210.097 51.7607 211.125 51.523 212.305 51.523C213.026 51.523 213.739 51.638 214.444 51.868C215.15 52.098 215.732 52.42 216.192 52.834L215.341 54.835C214.943 54.4823 214.49 54.214 213.984 54.03C213.494 53.846 213.018 53.754 212.558 53.754C211.562 53.754 210.787 54.0683 210.235 54.697C209.699 55.3103 209.43 56.192 209.43 57.342C209.43 58.4767 209.699 59.3737 210.235 60.033C210.787 60.677 211.562 60.999 212.558 60.999C213.003 60.999 213.478 60.907 213.984 60.723C214.49 60.539 214.943 60.263 215.341 59.895L216.192 61.919C215.732 62.3177 215.142 62.6397 214.421 62.885C213.716 63.115 213.011 63.23 212.305 63.23ZM222.86 63.23C221.695 63.23 220.683 62.9923 219.824 62.517C218.966 62.0417 218.299 61.367 217.823 60.493C217.348 59.6037 217.11 58.561 217.11 57.365C217.11 56.169 217.348 55.134 217.823 54.26C218.299 53.386 218.966 52.7113 219.824 52.236C220.683 51.7607 221.695 51.523 222.86 51.523C224.026 51.523 225.038 51.7607 225.896 52.236C226.755 52.7113 227.422 53.386 227.897 54.26C228.373 55.134 228.61 56.169 228.61 57.365C228.61 58.561 228.373 59.6037 227.897 60.493C227.422 61.367 226.755 62.0417 225.896 62.517C225.038 62.9923 224.026 63.23 222.86 63.23ZM222.86 61.045C223.719 61.045 224.409 60.7383 224.93 60.125C225.452 59.4963 225.712 58.5763 225.712 57.365C225.712 56.1383 225.452 55.226 224.93 54.628C224.409 54.0147 223.719 53.708 222.86 53.708C222.002 53.708 221.312 54.0147 220.79 54.628C220.269 55.226 220.008 56.1383 220.008 57.365C220.008 58.5763 220.269 59.4963 220.79 60.125C221.312 60.7383 222.002 61.045 222.86 61.045ZM235.054 63.23C232.294 63.23 230.914 61.6813 230.914 58.584V51.753H233.789V58.63C233.789 59.4273 233.95 60.0177 234.272 60.401C234.594 60.7843 235.108 60.976 235.813 60.976C236.58 60.976 237.209 60.7153 237.699 60.194C238.19 59.6573 238.435 58.952 238.435 58.078V51.753H241.31V63H238.504V61.321C237.753 62.5937 236.603 63.23 235.054 63.23ZM244.303 63V51.753H247.109V53.501C247.492 52.857 248.006 52.3663 248.65 52.029C249.309 51.6917 250.045 51.523 250.858 51.523C253.51 51.523 254.837 53.064 254.837 56.146V63H251.962V56.284C251.962 55.41 251.793 54.7737 251.456 54.375C251.134 53.9763 250.628 53.777 249.938 53.777C249.094 53.777 248.42 54.0453 247.914 54.582C247.423 55.1033 247.178 55.801 247.178 56.675V63H244.303ZM262.909 63.23C259.934 63.23 258.447 61.758 258.447 58.814V53.915H256.285V51.753H258.447V48.395H261.322V51.753H264.726V53.915H261.322V58.653C261.322 59.389 261.483 59.941 261.805 60.309C262.127 60.677 262.648 60.861 263.369 60.861C263.583 60.861 263.806 60.838 264.036 60.792C264.266 60.7307 264.503 60.6693 264.749 60.608L265.186 62.724C264.91 62.8773 264.557 63 264.128 63.092C263.714 63.184 263.307 63.23 262.909 63.23ZM272.015 63.23C270.742 63.23 269.646 62.9923 268.726 62.517C267.806 62.0417 267.093 61.367 266.587 60.493C266.096 59.619 265.851 58.584 265.851 57.388C265.851 56.2227 266.088 55.203 266.564 54.329C267.054 53.455 267.721 52.7727 268.565 52.282C269.423 51.776 270.397 51.523 271.486 51.523C273.08 51.523 274.338 52.029 275.258 53.041C276.193 54.053 276.661 55.433 276.661 57.181V58.032H268.611C268.825 60.0407 269.975 61.045 272.061 61.045C272.689 61.045 273.318 60.953 273.947 60.769C274.575 60.5697 275.15 60.263 275.672 59.849L276.477 61.781C275.94 62.2257 275.265 62.5783 274.453 62.839C273.64 63.0997 272.827 63.23 272.015 63.23ZM271.601 53.478C270.757 53.478 270.075 53.7387 269.554 54.26C269.032 54.7813 268.718 55.4867 268.611 56.376H274.269C274.207 55.4407 273.947 54.7277 273.487 54.237C273.042 53.731 272.413 53.478 271.601 53.478ZM283.261 63.23C282.28 63.23 281.414 62.9923 280.662 62.517C279.926 62.0417 279.351 61.367 278.937 60.493C278.523 59.6037 278.316 58.561 278.316 57.365C278.316 56.1537 278.523 55.1187 278.937 54.26C279.351 53.386 279.926 52.7113 280.662 52.236C281.414 51.7607 282.28 51.523 283.261 51.523C284.059 51.523 284.779 51.6993 285.423 52.052C286.067 52.4047 286.55 52.8723 286.872 53.455V46.785H289.747V63H286.941V61.137C286.635 61.781 286.152 62.2947 285.492 62.678C284.833 63.046 284.089 63.23 283.261 63.23ZM284.066 61.045C284.925 61.045 285.615 60.7383 286.136 60.125C286.658 59.4963 286.918 58.5763 286.918 57.365C286.918 56.1383 286.658 55.226 286.136 54.628C285.615 54.0147 284.925 53.708 284.066 53.708C283.208 53.708 282.518 54.0147 281.996 54.628C281.475 55.226 281.214 56.1383 281.214 57.365C281.214 58.5763 281.475 59.4963 281.996 60.125C282.518 60.7383 283.208 61.045 284.066 61.045ZM299.204 63V46.785H306.242C308.02 46.785 309.393 47.2297 310.359 48.119C311.325 49.0083 311.808 50.2503 311.808 51.845C311.808 53.4397 311.325 54.6893 310.359 55.594C309.393 56.4833 308.02 56.928 306.242 56.928H302.148V63H299.204ZM302.148 54.605H305.782C307.898 54.605 308.956 53.685 308.956 51.845C308.956 50.0203 307.898 49.108 305.782 49.108H302.148V54.605ZM313.707 63V51.753H316.513V53.731C317.065 52.397 318.246 51.661 320.055 51.523L320.929 51.454L321.113 53.892L319.457 54.053C317.571 54.237 316.628 55.203 316.628 56.951V63H313.707ZM322.53 49.338V46.532H325.75V49.338H322.53ZM322.714 63V51.753H325.589V63H322.714ZM333.774 63.23C332.593 63.23 331.566 62.9923 330.692 62.517C329.818 62.0263 329.143 61.3363 328.668 60.447C328.193 59.5577 327.955 58.515 327.955 57.319C327.955 56.123 328.193 55.0957 328.668 54.237C329.143 53.363 329.818 52.696 330.692 52.236C331.566 51.7607 332.593 51.523 333.774 51.523C334.495 51.523 335.208 51.638 335.913 51.868C336.618 52.098 337.201 52.42 337.661 52.834L336.81 54.835C336.411 54.4823 335.959 54.214 335.453 54.03C334.962 53.846 334.487 53.754 334.027 53.754C333.03 53.754 332.256 54.0683 331.704 54.697C331.167 55.3103 330.899 56.192 330.899 57.342C330.899 58.4767 331.167 59.3737 331.704 60.033C332.256 60.677 333.03 60.999 334.027 60.999C334.472 60.999 334.947 60.907 335.453 60.723C335.959 60.539 336.411 60.263 336.81 59.895L337.661 61.919C337.201 62.3177 336.611 62.6397 335.89 62.885C335.185 63.115 334.479 63.23 333.774 63.23ZM344.743 63.23C343.47 63.23 342.374 62.9923 341.454 62.517C340.534 62.0417 339.821 61.367 339.315 60.493C338.824 59.619 338.579 58.584 338.579 57.388C338.579 56.2227 338.817 55.203 339.292 54.329C339.783 53.455 340.45 52.7727 341.293 52.282C342.152 51.776 343.125 51.523 344.214 51.523C345.809 51.523 347.066 52.029 347.986 53.041C348.921 54.053 349.389 55.433 349.389 57.181V58.032H341.339C341.554 60.0407 342.704 61.045 344.789 61.045C345.418 61.045 346.046 60.953 346.675 60.769C347.304 60.5697 347.879 60.263 348.4 59.849L349.205 61.781C348.668 62.2257 347.994 62.5783 347.181 62.839C346.368 63.0997 345.556 63.23 344.743 63.23ZM344.329 53.478C343.486 53.478 342.803 53.7387 342.282 54.26C341.761 54.7813 341.446 55.4867 341.339 56.376H346.997C346.936 55.4407 346.675 54.7277 346.215 54.237C345.77 53.731 345.142 53.478 344.329 53.478Z"
                    fill="#191825"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_832_1086"
                    x="0"
                    y="0"
                    width="466"
                    height="313"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_832_1086"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="15" />
                    <feGaussianBlur stdDeviation="17" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_832_1086"
                      result="effect2_dropShadow_832_1086"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="62" />
                    <feGaussianBlur stdDeviation="31" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_832_1086"
                      result="effect3_dropShadow_832_1086"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="139" />
                    <feGaussianBlur stdDeviation="41.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_832_1086"
                      result="effect4_dropShadow_832_1086"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_832_1086"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <span
              id="discount_yellow"
              className="absolute top-[3.8rem] lg:right-[-6rem]"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_832_1062)">
                  <circle cx="24" cy="24" r="20" fill="#FACD49" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_832_1062"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_832_1062"
                    />
                  </filter>
                </defs>
              </svg>
            </span>

            <span
              id="smallyellow_svg"
              className="absolute top-[30%] right-[6rem]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_832_1063)">
                  <circle cx="12" cy="12" r="8" fill="#FF5722" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_832_1063"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_832_1063"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
            <span id="bigyellow_svg" className="absolute top-[60%] right-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_832_1064)">
                  <circle cx="20" cy="20" r="16" fill="#FF5722" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_832_1064"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_832_1064"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div
          id="travelpoint_rightsetion"
          className="lg:mr-[25rem] relative pl-6 m-auto mt-14"
        >
          <div id="right_top">
            <h4 className="text-[#F85E9F] font-bold text-lg lg:text-[24px]">
              TRAVEL POINT
            </h4>
            <h2 className="text-[30px] lg:text-[2.2vw] font-bold mt-2">
              We helping you find <br /> your dream location
            </h2>
            <p className="text-normal lg:text-lg mt-4 lg:mt-8 font-nunitosans">
              Contrary to popular belief, Lorem Ipsum is not <br /> simply
              random text. It has roots in a piece of <br /> classical Latin
              literature from 45 BC.
            </p>
          </div>
          <div id="right_bottom" className="mt-16 gap-4 lg:gap-8 flex flex-col">
            <div className="flex gap-4 lg:gap-8">
              <div className=" w-36 lg:w-52 h-[151px] border-solid border-2 rounded-[32px] flex flex-col items-center justify-center">
                <h1 className="text-[#FF5722]  rounded border-0 text-2xl lg:text-[35px] font-bold">
                  500+
                </h1>
                <h3 className=" text-sm lg:text-[18px] font-normal mt-2">
                  Holiday Package
                </h3>
              </div>
              <div className=" w-36 lg:w-52 h-[151px] border-solid border-2 rounded-[32px] flex flex-col items-center justify-center">
                <h1 className="text-[#FF5722]  rounded border-0 text-2xl lg:text-[35px] font-bold">
                  100
                </h1>
                <h3 className="text-sm lg:text-[18px] font-normal mt-2">
                  Luxury Hotel
                </h3>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-8">
              <div className=" w-36 lg:w-52 h-[151px] border-solid border-2 rounded-[32px] flex flex-col items-center justify-center">
                <h1 className="text-[#FF5722]  rounded border-0 text-2xl lg:text-[35px] font-bold">
                  7
                </h1>
                <h3 className="text-sm lg:text-[18px] font-normal mt-2">
                  Premium Airlines
                </h3>
              </div>
              <div className=" w-36 lg:w-52 h-[151px] border-solid border-2 rounded-[32px] flex flex-col items-center justify-center">
                <h1 className="text-[#FF5722]  rounded border-0 text-2xl lg:text-[35px] font-bold">
                  2k+
                </h1>
                <h3 className="text-sm lg:text-[18px] font-normal mt-2">
                  Happy Customer
                </h3>
              </div>
            </div>
          </div>
          <div
            id="svg_ticket"
            className="absolute top-[35%] lg:top-[40%] right-[2.8rem] lg:right-[-8.5rem]"
          >
            <svg
              width="277"
              height="353"
              viewBox="0 0 277 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dddd_832_1090)">
                <rect
                  x="83"
                  y="19"
                  width="112"
                  height="112"
                  rx="56"
                  fill="#FACD49"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M154.522 75.002C154.522 76.629 155.858 77.9528 157.5 77.9528C158.328 77.9528 159 78.6186 159 79.439V84.7916C159 89.318 155.284 93 150.716 93H127.286C122.718 93 119 89.318 119 84.7916V79.439C119 78.6186 119.672 77.9528 120.5 77.9528C122.144 77.9528 123.48 76.629 123.48 75.002C123.48 73.4166 122.198 72.2236 120.5 72.2236C120.102 72.2236 119.722 72.067 119.44 71.7876C119.158 71.5082 119 71.1296 119 70.7373L119.004 65.2103C119.004 60.684 122.72 57 127.288 57H150.712C155.28 57 158.998 60.684 158.998 65.2103L159 70.5649C159 70.9573 158.842 71.3378 158.562 71.6152C158.28 71.8946 157.9 72.0512 157.5 72.0512C155.858 72.0512 154.522 73.375 154.522 75.002ZM143.504 76.296L145.862 74.021C146.272 73.6286 146.414 73.05 146.236 72.515C146.06 71.9798 145.6 71.5994 145.044 71.522L141.786 71.0504L140.328 68.1254C140.078 67.622 139.57 67.3089 139.004 67.3069H139C138.436 67.3069 137.928 67.6201 137.674 68.1234L136.216 71.0504L132.964 71.52C132.402 71.5994 131.942 71.9798 131.764 72.515C131.588 73.05 131.73 73.6286 132.138 74.021L134.496 76.296L133.94 79.5124C133.844 80.0672 134.07 80.6182 134.53 80.9492C134.79 81.1334 135.092 81.2286 135.398 81.2286C135.632 81.2286 135.868 81.171 136.084 81.0582L139 79.5402L141.91 81.0542C142.414 81.3216 143.012 81.28 143.47 80.9472C143.932 80.6182 144.158 80.0672 144.062 79.5124L143.504 76.296Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dddd_832_1090"
                  x="0"
                  y="0"
                  width="278"
                  height="353"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_832_1090"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="15" />
                  <feGaussianBlur stdDeviation="17" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_832_1090"
                    result="effect2_dropShadow_832_1090"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="62" />
                  <feGaussianBlur stdDeviation="31" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_832_1090"
                    result="effect3_dropShadow_832_1090"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="139" />
                  <feGaussianBlur stdDeviation="41.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_832_1090"
                    result="effect4_dropShadow_832_1090"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect4_dropShadow_832_1090"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travelpoint;
