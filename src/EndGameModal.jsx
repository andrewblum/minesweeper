import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import useLocalStorage from './hooks/useLocalStorage';
import { formatSeconds } from './time';
import confetti from 'canvas-confetti';

export function EndGameModal({ gameOver, handleReset, time, difficulty }) {
  const [bestTime, setBestTime] = useLocalStorage(
    `bestMinesweeperTime:${difficulty}`,
  );
  const [prevBestTime] = useState(bestTime);
  const [comparison, setComparison] = useState(null);

  useEffect(() => {
    if (gameOver === 'win' && (!bestTime || time < bestTime)) setBestTime(time);

    if (prevBestTime !== null && prevBestTime !== undefined) {
      let message = 'Your best time is ';
      if (time < prevBestTime) message = 'You beat your previous record of ';
      if (time === prevBestTime)
        message = 'You matched your previous record of ';

      setComparison(
        <div>
          {message}
          <span className="font-bold text-green-800">
            {formatSeconds(prevBestTime)}
          </span>
        </div>,
      );
    }
  }, [gameOver, time, bestTime, prevBestTime, setBestTime]);

  if (gameOver === 'win') {
    confetti();
  }

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You {gameOver} {gameOver === 'win' ? '😁' : '😿'}
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            {gameOver === 'win' && (
              <div>
                <div>
                  Your time was{' '}
                  <span className="font-bold text-green-600">
                    {formatSeconds(time)}
                  </span>
                </div>
                {comparison}
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleReset}>Try Again</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
