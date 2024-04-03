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
  const totalSecs = Number(s);
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor(totalSecs / 60) % 60;
  const seconds = totalSecs % 60;

  return [hours, minutes, seconds]
    .map((time) => (time < 10 ? "0" + time : time))
    .filter((time, idx) => time !== "00" || idx > 0)
    .join(":");
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
