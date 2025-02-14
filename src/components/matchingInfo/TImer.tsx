import useTimerStore from '@/store/useTimerStore';
import { formatTimeLikeTimer } from '@/utils';
import { useEffect } from 'react';

const Timer = () => {
  const { timer, start, reset } = useTimerStore();

  useEffect(() => {
    start();
  }, [start, reset]);
  return (
    <span className="font-bold text-[36px] text-matchLine">
      {formatTimeLikeTimer(timer)}
    </span>
  );
};

export default Timer;
