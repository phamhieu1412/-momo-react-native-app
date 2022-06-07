import {PayloadAction} from '@reduxjs/toolkit';

export default function* counterSaga() {
  console.warn('hello sg');
}

export function* log(action: PayloadAction) {
  console.log(action);
}
