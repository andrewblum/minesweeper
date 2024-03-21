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

export function EndGameModal({ gameOver, handleReset, time }) {
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
          <AlertDialogTitle>
            You {gameOver} {gameOver === "win" ? "😁" : "😿"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {gameOver === "win" && (
              <>
                <div>
                  Your time was{" "}
                  <span className="font-bold text-green-600">
                    {formatSeconds(time)}
                  </span>
                </div>
                <div>
                  Your best time is{" "}
                  <span className="font-bold text-green-600">
                    {formatSeconds(bestTime)}
                  </span>
                </div>
              </>
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
