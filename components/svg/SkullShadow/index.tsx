import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";

const SkullShadow = (props) => (
  <Box {...props}>
    <motion.div
      animate={{
        opacity: 0.5,
        transition: {
          duration: 1.9,
          yoyo: Infinity
        }
      }}
    >
      <svg
        width={434}
        height={168}
        viewBox="0 0 434 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_f_51_35)">
          <ellipse
            cx={216.757}
            cy={84.485}
            rx={141.531}
            ry={8.51501}
            fill="url(#paint0_linear_51_35)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_51_35"
            x={0.225708}
            y={0.969971}
            width={433.062}
            height={167.03}
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
              stdDeviation={37.5}
              result="effect1_foregroundBlur_51_35"
            />
          </filter>
          <linearGradient
            id="paint0_linear_51_35"
            x1={93.9816}
            y1={79.576}
            x2={94.8287}
            y2={97.1951}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5B555" stopOpacity={0.71} />
            <stop offset={1} stopColor="#F1B884" stopOpacity={0.7} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  </Box>
);

export default SkullShadow;
