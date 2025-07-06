import type { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return <div className="h-full w-full bg-white z-50">{children}</div>;
};

export default Modal;
