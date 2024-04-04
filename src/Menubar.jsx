import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import { MenuPopoverMemo } from "./MenuPopover";

export function Menubar({ flags, time, changeDifficulty, handleReset }) {
  return (
    <>
      <div className="grid grid-cols-3 items-center p-1">
        <Select className="justify-self-start" onValueChange={changeDifficulty}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Easy" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EASY">Easy</SelectItem>
            <SelectItem value="MEDIUM">Medium</SelectItem>
            <SelectItem value="HARD">Hard</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-row gap-x-3 justify-self-center">
          <div>⛳️ {flags}</div>
          <div>⏱️ {time}</div>
        </div>
        <MenuPopoverMemo handleReset={handleReset} />
      </div>
      <Separator />
    </>
  );
}
