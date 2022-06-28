import { IIconModel } from 'models/icon.model';
import React from 'react';

export default function ArrowRightIcon({
  size = 7,
  color = '#9277FF',
}: IIconModel) {
  return (
    <svg
      width={size}
      height={(size * 10) / 7}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l4 4-4 4"
        stroke={color}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
