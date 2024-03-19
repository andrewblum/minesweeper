import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function EndGameModal({ gameOver, handleReset, time }) {
    const date = new Date(0)
    date.setSeconds(time);
    const timeString = date.toISOString().substring(11, 19);
    let bestTime = localStorage.getItem("bestMineSweeperTime");
    bestTime ??= 0;
    if (gameOver === "win" && (bestTime === 0 || time < bestTime)) {
      localStorage.setItem("bestMineSweeperTime", time);
      bestTime = time;
    }
    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You {gameOver} {gameOver === "win" ? "😁" : "😿"}{" "}</AlertDialogTitle>
            <AlertDialogDescription>
              Your time was {timeString}
              Your best time is {bestTime !== 0 ? bestTime : "--"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleReset}>Try Again</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  