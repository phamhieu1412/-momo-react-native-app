/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

var timer: any = null;

export const useDelayedInput = (keyword: string = '', time: number = 500) => {
  const [delayKeyword, setDelayKeyword] = useState(keyword);

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setDelayKeyword(keyword);

      return () => {
        clearTimeout(timer);
      };
    }, time);
  }, [keyword]);

  return {delayKeyword};
};

// how to use
// const [keyword, setKeyword] = useState('');
//   const {delayKeyword} = useDelayedInput(keyword, 2000);

//   useEffect(() => {
//     console.log(keyword);
//   }, [delayKeyword]);
