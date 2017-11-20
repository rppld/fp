import React from "react"
import Spacer from "../components/Spacer"

const Logo = () => (
  <div className="logo vh-75 flex flex-column items-center align-center justify-center fixed w-100 top-0 z-0 relative">
    <Spacer />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="252"
      height="276"
      viewBox="0 0 252 276"
    >
      <g fill="none" fillRule="evenodd">
        <polygon fill="#000" points="144 276 252 276 252 252 144 252" />
        <polygon fill="#000" points="0 24 108 24 108 0 0 0" />
        <path
          fill="#000"
          d="M168,156 L204,156 C230.508,156 252,134.508 252,108 C252,81.488 230.508,60 204,60 L144,60 L144,72 L144,84 L144,132 L144,156 L144,216 L168,216 L168,156 Z M168,84 L204,84 C217.254,84 228,94.746 228,108 C228,121.254 217.254,132 204,132 L168,132 L168,84 Z"
        />
        <polygon
          fill="#000"
          points="0 72 0 84 0 132 0 156 0 216 24 216 24 156 96 156 96 132 24 132 24 84 108 84 108 60 0 60"
        />
      </g>
    </svg>
  </div>
)

export default Logo
