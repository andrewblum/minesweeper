import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GearIcon } from "@radix-ui/react-icons";

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
        <Popover>
          <PopoverTrigger className="justify-self-end">
            <GearIcon />
          </PopoverTrigger>
          <PopoverContent className="flex flex-row gap-1.5">
            <Button onClick={handleReset}>Reset Game</Button>
            <Button onClick={() => localStorage.clear()}>
              Clear Best Time
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator />
    </>
  );
}
