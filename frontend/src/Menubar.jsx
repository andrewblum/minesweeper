import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import { CaretDownIcon, DotFilledIcon } from "@radix-ui/react-icons";

export function Menubar({ flags, time, difficulty, changeDifficulty }) {
  return (
    <div>
      Flags: {flags}
      Time: {time}
    </div>
  );
}
