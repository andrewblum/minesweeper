import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { GearIcon } from '@radix-ui/react-icons';
import { formatSeconds } from './time';
import useLocalStorage, { clearStorage } from './hooks/useLocalStorage';
import { memo } from 'react';

export function MenuPopover({ handleReset }) {
  const [easyTime] = useLocalStorage('bestMinesweeperTime:EASY');
  const [medTime] = useLocalStorage('bestMinesweeperTime:MEDIUM');
  const [hardTime] = useLocalStorage('bestMinesweeperTime:HARD');

  return (
    <Popover>
      <PopoverTrigger className="justify-self-end">
        <GearIcon />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4">
        <div className="text-sm text-muted-foreground">
          <h4 className="text-base font-bold text-slate-900 mb-2">
            Personal Bests
          </h4>
          <div className="flex justify-between">
            <span className="font-bold text-green-600">Easy</span>
            <span>{easyTime ? formatSeconds(easyTime) : '--'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-orange-600">Medium</span>
            <span>{medTime ? formatSeconds(medTime) : '--'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-red-600">Hard</span>
            <span>{hardTime ? formatSeconds(hardTime) : '--'}</span>
          </div>
        </div>
        <div className="flex flex-row gap-1.5">
          <Button onClick={handleReset}>Reset Game</Button>
          <Button onClick={clearStorage}>Clear Best Time</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const MenuPopoverMemo = memo(MenuPopover);
