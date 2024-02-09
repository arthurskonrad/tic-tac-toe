export class Grid {
  public ticTacToeGridEl: GridType;
  public eventCallbacks: EventCallbacksType;

  constructor() {
    this.ticTacToeGridEl = [
      [
        document.getElementById("00"),
        document.getElementById("01"),
        document.getElementById("02"),
      ],
      [
        document.getElementById("10"),
        document.getElementById("11"),
        document.getElementById("12"),
      ],
      [
        document.getElementById("20"),
        document.getElementById("21"),
        document.getElementById("22"),
      ],
    ];

    this.eventCallbacks = {};
  }

  public addEvent({ el, eventType, callback }: AddEventType) {
    if (!el) return;
    const key = `${el.id}-${eventType}`;
    this.eventCallbacks[key] = callback;
    el.addEventListener(eventType, callback);
  }

  public removeEvent({ el, eventType }: RemoveEventType) {
    if (!el) return;
    const key = `${el.id}-${eventType}`;
    if (this.eventCallbacks[key]) {
      el.removeEventListener(eventType, this.eventCallbacks[key]);
      delete this.eventCallbacks[key];
    }
  }

  public setupTicTacToeGridEl() {
    for (let i = 0; i < this.ticTacToeGridEl.length; i++) {
      for (let j = 0; j < this.ticTacToeGridEl[i].length; j++) {
        const currentEl = this.ticTacToeGridEl[i][j];
        const callback = function () {
          console.log({ position: [i, j], player: 0 });
        };
        this.addEvent({ el: currentEl, eventType: "click", callback });
      }
    }
  }

  public cleanTicTacToeGridEl() {
    for (let i = 0; i < this.ticTacToeGridEl.length; i++) {
      for (let j = 0; j < this.ticTacToeGridEl[i].length; j++) {
        const currentEl = this.ticTacToeGridEl[i][j];
        this.removeEvent({ el: currentEl, eventType: "click" });
      }
    }
  }
}
