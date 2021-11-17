import { Box } from "@chakra-ui/layout";
import { motion } from "framer-motion"

import * as React from "react";

const Skull = (props) => (
  <Box {...props}>
    <motion.div
      animate={{
        y: -30,
        transition: {
          duration: 2.002,
          yoyo: Infinity
        }
      }}
    >
      <svg
        width={681}
        height={648}
        viewBox="0 0 681 648"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_f_52_13)">
          <path
            d="M111 111H570L487.822 432.266L232.875 484.359L111 111Z"
            fill="url(#paint0_linear_52_13)"
          />
        </g>
        <g filter="url(#filter1_f_52_13)">
          <ellipse
            cx={342.941}
            cy={408.114}
            rx={133.468}
            ry={129.699}
            fill="url(#paint1_linear_52_13)"
          />
        </g>
        <g opacity={0.4} filter="url(#filter2_f_52_13)">
          <ellipse
            cx={342.942}
            cy={408.114}
            rx={122.346}
            ry={118.845}
            fill="url(#paint2_linear_52_13)"
          />
        </g>
        <g opacity={0.3} filter="url(#filter3_f_52_13)">
          <path
            d="M333.04 138.405C341.992 249.789 294.926 325.899 284.753 218.992C216.527 254.401 237.12 360.05 185.33 318.874C194.777 404.622 258.452 434.797 223.166 428.363C283.954 485.036 378.102 488.406 417.238 443.374C409.643 443.374 408.897 442.915 408.897 434.797C469.612 423.424 499.015 383.282 498.373 355.904C495.057 363.568 491.429 376.631 475.127 378.737C454.749 381.369 494.041 290.443 468.047 271.664C417.238 323.864 417.238 189.281 333.04 138.405Z"
            fill="url(#paint3_linear_52_13)"
          />
        </g>
        <g filter="url(#filter4_f_52_13)">
          <path
            d="M376.804 209.767C420.4 223.74 421.349 337.259 446.149 277.607C462.994 326.599 430.438 402.662 474.239 363.935C466.249 444.584 412.396 472.964 442.239 466.913C390.828 520.215 311.201 523.384 278.103 481.031C284.526 481.031 285.156 480.599 285.156 472.964C233.806 462.268 208.939 424.513 209.482 398.763C212.287 405.971 215.355 418.257 229.143 420.238C246.377 422.714 213.146 337.195 235.13 319.533C256.544 401.078 244.064 293.609 295.204 264.941C306.056 337.252 387.03 274.161 376.804 209.767Z"
            fill="url(#paint4_linear_52_13)"
          />
        </g>
        <g filter="url(#filter5_f_52_13)">
          <path
            d="M412.34 220.513C420.876 287.97 354.391 262.942 364.644 160.519C323.655 190.909 301.549 242.297 280.955 262.27C268.499 274.351 229.313 264.441 247.317 220.513C204.654 264.229 228.104 324.593 190.891 290.489C171.63 553.414 570.702 571.617 463.377 268.586C445.185 340.395 455.787 245.758 412.34 220.513Z"
            fill="url(#paint5_radial_52_13)"
          />
        </g>
        <g opacity={0.1} filter="url(#filter6_f_52_13)">
          <path
            d="M346.231 202.983C306.601 213.826 301.288 318.774 278.744 272.488C233.095 311.009 248.442 365.976 208.624 335.926C127.334 560.029 585.408 572.032 470.571 305.02C451.104 368.293 462.449 284.904 415.96 262.66C425.094 322.1 335.26 293.232 346.231 202.983Z"
            fill="url(#paint6_linear_52_13)"
          />
        </g>
        <g filter="url(#filter7_f_52_13)">
          <path
            d="M345.79 225.911C313.719 235.593 309.419 329.305 291.175 287.975C254.234 322.371 266.654 371.454 234.431 344.621C168.646 544.732 539.346 555.449 446.413 317.024C430.659 373.523 439.84 299.062 402.219 279.199C409.61 332.275 336.912 306.498 345.79 225.911Z"
            fill="url(#paint7_linear_52_13)"
          />
        </g>
        <g filter="url(#filter8_f_52_13)">
          <ellipse
            cx={334.261}
            cy={313.96}
            rx={44.2181}
            ry={24.6916}
            fill="url(#paint8_linear_52_13)"
          />
        </g>
        <mask
          id="mask0_52_13"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={239}
          y={312}
          width={210}
          height={192}
        >
          <path
            d="M380.222 316.845C357.198 310.86 333.025 310.86 310.001 316.845L302.863 318.701C264.089 328.779 237.678 364.644 239.561 404.662L239.917 412.216C241.297 441.534 260.042 467.198 287.55 477.431V477.431C290.626 478.576 293.243 480.696 295.001 483.468L301.189 493.226C303.769 497.294 307.723 500.303 312.331 501.705L312.685 501.813C313.541 502.073 314.436 502.187 315.33 502.148V502.148C319.697 501.958 323.37 498.809 324.224 494.522L324.337 493.956C325.047 490.396 330.089 490.265 330.983 493.783L331.201 494.644C332.301 498.973 335.945 502.183 340.377 502.727L343.858 503.154C344.934 503.286 346.022 503.286 347.097 503.154L350.225 502.77C354.871 502.2 358.69 498.836 359.842 494.299L359.997 493.688C360.934 489.999 366.193 490.055 367.051 493.762L367.247 494.606C368.235 498.872 371.946 501.956 376.321 502.146V502.146C377.24 502.186 378.159 502.07 379.039 501.802L379.305 501.721C383.935 500.312 387.876 497.231 390.361 493.077L396.152 483.395C397.783 480.668 400.251 478.542 403.189 477.333V477.333C428.192 467.041 445.297 443.581 447.451 416.628L448.144 407.948C451.469 366.333 424.437 328.338 384.032 317.835L380.222 316.845Z"
            fill="#FFF0D3"
          />
        </mask>
        <g mask="url(#mask0_52_13)">
          <g filter="url(#filter9_di_52_13)">
            <path
              d="M380.222 316.845C357.198 310.86 333.025 310.86 310.001 316.845L302.863 318.701C264.089 328.779 237.678 364.644 239.561 404.662L239.917 412.216C241.297 441.534 260.042 467.198 287.55 477.431V477.431C290.626 478.576 293.243 480.696 295.001 483.468L301.189 493.226C303.769 497.294 307.723 500.303 312.331 501.705L312.685 501.813C313.541 502.073 314.436 502.187 315.33 502.148V502.148C319.697 501.958 323.37 498.809 324.224 494.522L324.337 493.956C325.047 490.396 330.089 490.265 330.983 493.783L331.201 494.644C332.301 498.973 335.945 502.183 340.377 502.727L343.858 503.154C344.934 503.286 346.022 503.286 347.097 503.154L350.225 502.77C354.871 502.2 358.69 498.836 359.842 494.299L359.997 493.688C360.934 489.999 366.193 490.055 367.051 493.762L367.247 494.606C368.235 498.872 371.946 501.956 376.321 502.146V502.146C377.24 502.186 378.159 502.07 379.039 501.802L379.305 501.721C383.935 500.312 387.876 497.231 390.361 493.077L396.152 483.395C397.783 480.668 400.251 478.542 403.189 477.333V477.333C428.192 467.041 445.297 443.581 447.451 416.628L448.144 407.948C451.469 366.333 424.437 328.338 384.032 317.835L380.222 316.845Z"
              fill="url(#paint9_radial_52_13)"
            />
          </g>
          <g filter="url(#filter10_f_52_13)">
            <ellipse
              cx={312.558}
              cy={320.201}
              rx={36.8936}
              ry={14.3808}
              fill="white"
            />
          </g>
          <g filter="url(#filter11_f_52_13)">
            <ellipse
              cx={312.558}
              cy={320.201}
              rx={23.6011}
              ry={9.22546}
              fill="white"
            />
          </g>
          <g opacity={0.4} filter="url(#filter12_f_52_13)">
            <path
              d="M275.868 450.933C274.838 437.13 284.715 424.905 298.426 423.011L331.752 418.407C338.186 417.519 344.712 417.519 351.147 418.407L384.341 422.993C398.11 424.895 408.01 437.201 406.919 451.058V451.058C405.175 473.228 386.675 490.329 364.437 490.329H318.31C296.032 490.329 277.524 473.149 275.868 450.933V450.933Z"
              fill="url(#paint10_linear_52_13)"
            />
          </g>
          <g filter="url(#filter13_di_52_13)">
            <ellipse
              cx={292.348}
              cy={388.713}
              rx={28.0771}
              ry={28.0834}
              fill="url(#paint11_linear_52_13)"
            />
          </g>
          <g filter="url(#filter14_di_52_13)">
            <ellipse
              cx={397.875}
              cy={388.713}
              rx={28.0771}
              ry={28.0833}
              fill="url(#paint12_linear_52_13)"
            />
          </g>
          <g filter="url(#filter15_f_52_13)">
            <ellipse
              rx={25.1977}
              ry={5.75589}
              transform="matrix(0.771755 -0.63592 0.66464 0.747164 393.612 489.023)"
              fill="white"
            />
          </g>
          <g filter="url(#filter16_f_52_13)">
            <ellipse
              rx={8.59661}
              ry={3.04946}
              transform="matrix(0.771754 -0.635921 0.664639 0.747164 388.603 496.466)"
              fill="white"
            />
          </g>
          <g filter="url(#filter17_f_52_13)">
            <ellipse
              rx={12.6458}
              ry={6.48562}
              transform="matrix(0.75956 -0.650438 0.650271 0.759703 357.691 501.668)"
              fill="white"
            />
          </g>
          <g filter="url(#filter18_f_52_13)">
            <ellipse
              rx={18.1753}
              ry={6.48562}
              transform="matrix(0.759561 -0.650436 0.650272 0.759701 322.443 503.279)"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_52_13"
            x={0.834511}
            y={0.834511}
            width={679.331}
            height={593.69}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={55.0827}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter1_f_52_13"
            x={99.3079}
            y={168.249}
            width={487.267}
            height={479.729}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={55.0827}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter2_f_52_13"
            x={110.43}
            y={179.103}
            width={465.023}
            height={458.022}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={55.0827}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter3_f_52_13"
            x={80.6726}
            y={33.7479}
            width={522.368}
            height={545.229}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={52.3286}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter4_f_52_13"
            x={165.407}
            y={165.7}
            width={352.898}
            height={388.502}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={22.0331}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter5_f_52_13"
            x={165.712}
            y={136.017}
            width={340.527}
            height={380.258}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={12.2509}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter6_f_52_13"
            x={88.7281}
            y={92.8176}
            width={510.597}
            height={522.057}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={55.0827}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter7_f_52_13"
            x={207.277}
            y={206.632}
            width={273.457}
            height={307.981}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={9.63948}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter8_f_52_13"
            x={216.74}
            y={215.966}
            width={235.041}
            height={195.988}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={36.6512}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter9_di_52_13"
            x={221.289}
            y={298.394}
            width={237.046}
            height={212.57}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={7.16076} dy={4.95745} />
            <feGaussianBlur stdDeviation={1.37707} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.12 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_52_13"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_52_13"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={-18.1773} dy={-13.9622} />
            <feGaussianBlur stdDeviation={13.9622} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.94 0 0 0 0.31 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_52_13" />
          </filter>
          <filter
            id="filter10_f_52_13"
            x={220.582}
            y={250.737}
            width={183.953}
            height={138.927}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={27.5414}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter11_f_52_13"
            x={233.875}
            y={255.892}
            width={157.368}
            height={128.616}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={27.5414}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter12_f_52_13"
            x={193.17}
            y={335.117}
            width={296.456}
            height={237.836}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={41.3121}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter13_di_52_13"
            x={260.271}
            y={360.63}
            width={64.1543}
            height={64.1667}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.925 0 0 0 0 0.4958 0 0 0 0 0.254375 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_52_13"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_52_13"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.26 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_52_13" />
          </filter>
          <filter
            id="filter14_di_52_13"
            x={365.798}
            y={360.63}
            width={64.1543}
            height={64.1667}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.925 0 0 0 0 0.4958 0 0 0 0 0.254375 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_52_13"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_52_13"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.26 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_52_13" />
          </filter>
          <filter
            id="filter15_f_52_13"
            x={335.231}
            y={433.87}
            width={116.762}
            height={110.306}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={19.279}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter16_f_52_13"
            x={359.631}
            y={468.509}
            width={57.9441}
            height={55.9144}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={11.0165}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter17_f_52_13"
            x={308.64}
            y={453.52}
            width={98.1018}
            height={96.295}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={19.279}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <filter
            id="filter18_f_52_13"
            x={269.446}
            y={451.91}
            width={105.994}
            height={102.738}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={19.279}
              result="effect1_foregroundBlur_52_13"
            />
          </filter>
          <linearGradient
            id="paint0_linear_52_13"
            x1={435.655}
            y1={138.623}
            x2={371.052}
            y2={418.44}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBD8D" stopOpacity={0} />
            <stop offset={0.50718} stopColor="#FFB546" stopOpacity={0.12} />
            <stop offset={1} stopColor="#FAFF00" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_52_13"
            x1={342.941}
            y1={278.415}
            x2={342.941}
            y2={537.813}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA450" stopOpacity={0.38} />
            <stop offset={1} stopColor="#FFED50" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_52_13"
            x1={342.942}
            y1={289.268}
            x2={342.942}
            y2={400.894}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEBCE" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint3_linear_52_13"
            x1={341.212}
            y1={168.47}
            x2={341.212}
            y2={482.817}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6FFEA" stopOpacity={0.95} />
            <stop offset={1} stopColor="#F6EB4E" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint4_linear_52_13"
            x1={439.109}
            y1={249.924}
            x2={342.363}
            y2={518.114}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFBA0" stopOpacity={0.15} />
            <stop offset={1} stopColor="#3AFFE7" stopOpacity={0.06} />
          </linearGradient>
          <radialGradient
            id="paint5_radial_52_13"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(293.434 290.625) rotate(-0.802597) scale(96.8552 156.91)"
          >
            <stop stopColor="#FFDAA4" stopOpacity={0.29} />
            <stop offset={1} stopColor="#FFC350" stopOpacity={0} />
          </radialGradient>
          <linearGradient
            id="paint6_linear_52_13"
            x1={469.926}
            y1={280.166}
            x2={326.487}
            y2={463.076}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#301758" />
            <stop offset={1} stopColor="#301658" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_52_13"
            x1={445.891}
            y1={294.831}
            x2={315.374}
            y2={445.665}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD5A4" stopOpacity={0.3} />
            <stop offset={1} stopColor="#FFB950" stopOpacity={0.17} />
          </linearGradient>
          <linearGradient
            id="paint8_linear_52_13"
            x1={295.903}
            y1={299.725}
            x2={314.959}
            y2={342.431}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0.71} />
            <stop offset={1} stopColor="#FFFFF8" stopOpacity={0.7} />
          </linearGradient>
          <radialGradient
            id="paint9_radial_52_13"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(345.111 335.395) rotate(91.1178) scale(173.824 140.447)"
          >
            <stop stopColor="#FCA95C" />
            <stop offset={0.420971} stopColor="#FFAB48" stopOpacity={0.990923} />
            <stop offset={0.829897} stopColor="#EAA339" stopOpacity={0.77} />
            <stop offset={1} stopColor="#C67517" />
          </radialGradient>
          <linearGradient
            id="paint10_linear_52_13"
            x1={341.449}
            y1={417.068}
            x2={341.449}
            y2={490.329}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9B568" />
            <stop offset={1} stopColor="#E8A250" stopOpacity={0.87} />
          </linearGradient>
          <linearGradient
            id="paint11_linear_52_13"
            x1={292.348}
            y1={364.658}
            x2={292.37}
            y2={421.775}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#241E3D" />
            <stop offset={1} stopColor="#414141" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_52_13"
            x1={397.875}
            y1={364.658}
            x2={397.897}
            y2={421.775}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#241E3D" />
            <stop offset={1} stopColor="#414141" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  </Box>
);

export default Skull;
