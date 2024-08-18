// declarations.d.ts
interface Window {
  ethereum: {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: (...args: any[]) => void) => void;
  };
}

// declare module 'maschain-sdk' {
//   // Add the necessary types for the module's API here.
//   const Maschain: any;
//   export default Maschain;
// }