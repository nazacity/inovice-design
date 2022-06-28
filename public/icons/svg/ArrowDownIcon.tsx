import { IIconModel } from 'models/icon.model';
import React from 'react';

export default function ArrowDownIcon({
  size = 11,
  color = '#7C5DFA',
}: IIconModel) {
  return (
    <svg
      width={size}
      height={(size * 7) / 11}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke={color}
        strokeWidth="2"
        fill="none"
        fillEule="evenodd"
      />
    </svg>
  );
}
