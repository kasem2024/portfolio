declare module "use-sound" {
    export type ExposedData = {
      stop: () => void;
      isPlaying: boolean;
    };
  
    export default function useSound(
      src: string,
      options?: { volume?: number; onend?: () => void }
    ): [() => void, ExposedData];
  }
  