interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules
declare module '*.jpg'; 
declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module 'vfile-message' {
  export type VFileMessage = any;
}
declare module 'unified';

declare module 'rehype-react' {
  interface RehypeOptions {
    createElement: any;
    components: any;
  }
  class RehypeReact {
    Compiler: any

    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}
