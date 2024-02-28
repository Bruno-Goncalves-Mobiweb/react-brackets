import { IRoundProps } from './Rounds';

export type IMobileProps = {
  mobileBreakpoint?: number;
};

export type ISeedProps = {
  id: number | string;
  teams: Array<{ name?: string; [key: string]: any }>;
  date?: string;
  mobileBreakpoint?: number;
  [key: string]: any;
};

export interface IRenderSeedProps {
  seed: ISeedProps;
  breakpoint: number;
  roundIndex: number;
  seedIndex: number;
  rounds?: IRoundProps[];
}
