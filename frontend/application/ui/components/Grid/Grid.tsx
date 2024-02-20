import { PropsWithChildren } from "react";

type Props = unknown;

export function Grid({ children }: PropsWithChildren<Props>) {
  return <div className="grid w-[150px] grid-cols-3">{children}</div>;
}
