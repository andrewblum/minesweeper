import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { GearIcon } from '@radix-ui/react-icons'

export function Menubar({ flags, time, changeDifficulty }) {
  return (
    <div>
      <Select onValueChange={changeDifficulty} >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Easy" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="EASY">Easy</SelectItem>
          <SelectItem value="MEDIUM">Medium</SelectItem>
          <SelectItem value="HARD">Hard</SelectItem>
        </SelectContent>
      </Select>
      ⛳️ {flags}
      ⏱️ {time}
      <Popover>
        <PopoverTrigger>
          <GearIcon/>
        </PopoverTrigger>
        <PopoverContent>Adjust what each difficulty means here.</PopoverContent>
      </Popover>

    </div>
  );
}
