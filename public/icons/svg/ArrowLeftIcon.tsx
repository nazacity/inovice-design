import { IIconModel } from 'models/icon.model';
import React from 'react';

export default function ArrowLeftIcon({
  size = 7,
  color = '#9277FF',
}: IIconModel) {
  return (
    <svg
      width={size}
      height={(size * 7) / 10}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke={color}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
