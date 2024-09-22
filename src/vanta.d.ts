// src/vanta.d.ts
declare module "vanta/dist/vanta.waves.min" {
  import { Vanta } from "vanta";
  export default function WAVES(options: any): Vanta;
}

declare global {
  interface Window {
    VANTA: any;
  }
}
