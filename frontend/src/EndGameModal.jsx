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
    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You {gameOver} {gameOver === "win" ? "😁" : "😿"}{" "}</AlertDialogTitle>
            <AlertDialogDescription>
              Your time was {timeString}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleReset}>Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  