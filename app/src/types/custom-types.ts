type AddEventType = {
  el: HTMLElement | null;
  eventType: string;
  callback: () => void;
};

type RemoveEventType = {
  el: HTMLElement | null;
  eventType: string;
};

type GridType = (HTMLElement | null)[][];

type EventCallbacksType = {
  [key: string]: EventListenerOrEventListenerObject;
};
