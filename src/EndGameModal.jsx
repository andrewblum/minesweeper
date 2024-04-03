import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const formatSeconds = (s) => {
  const date = new Date(0);
  date.setSeconds(s);
  return date.toISOString().substring(11, 19);
};

export function EndGameModal({ gameOver, handleReset, time, difficulty }) {
  const bestTime = localStorage.getItem(`bestMinesweeperTime:${difficulty}`);

  if (gameOver === "win" && (!bestTime || time < Number(bestTime))) {
    localStorage.setItem(`bestMinesweeperTime:${difficulty}`, time);
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
                  {time <= bestTime
                    ? `You ${
                        time < bestTime ? "beat" : "matched"
                      } your previous record of `
                    : "Your best time is "}
                  <span className="font-bold text-green-800">
                    {formatSeconds(bestTime)}
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
