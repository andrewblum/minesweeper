import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useLocalStorage from "./hooks/useLocalStorage";
import { formatSeconds } from "./time";

export function EndGameModal({ gameOver, handleReset, time, difficulty }) {
  const [bestTime, setBestTime] = useLocalStorage(
    `bestMinesweeperTime:${difficulty}`
  );

  if (gameOver === "win" && (!bestTime || time < bestTime)) {
    setBestTime(time);
  }

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You {gameOver} {gameOver === "win" ? "😁" : "😿"}
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            {gameOver === "win" && (
              <div>
                <div>
                  Your time was{" "}
                  <span className="font-bold text-green-600">
                    {formatSeconds(time)}
                  </span>
                </div>
                <div>
                  Your best time is{" "}
                  <span className="font-bold text-green-800">
                    {formatSeconds(bestTime ?? time)}
                  </span>
                </div>
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
