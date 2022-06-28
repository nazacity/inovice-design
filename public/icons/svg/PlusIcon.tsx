import { IIconModel } from 'models/icon.model';
import React from 'react';

export default function PlusIcon({ size = 11, color = '#7C5DFA' }: IIconModel) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
}
