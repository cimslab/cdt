import { ReactElement, MouseEventHandler } from "react";

interface Props {
  Icon: any;
  title: string;
  handleClick?: MouseEventHandler;
  index?: number;
}

export default function MenuButton({
  Icon,
  title,
  handleClick,
  index,
}): ReactElement<Props> {
  return (
    <div id={`${index}`} className="icon" title={title} onClick={handleClick}>
      {Icon}
    </div>
  );
}
