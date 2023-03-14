import { ReactElement, PropsWithChildren } from "react";

export default function RightMenuContainer({
  children,
}): ReactElement<PropsWithChildren> {
  return (
    <nav id="right-menu" className="">
      {children}
    </nav>
  );
}
