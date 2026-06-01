declare module 'gsap-trial/SplitText' {
  class SplitText {
    constructor(target: any, config?: any);
    split(config?: any): this;
    revert(): this;
    readonly chars: any[];
    readonly words: any[];
    readonly lines: any[];
    [key: string]: any;
  }
  export = SplitText;
}
