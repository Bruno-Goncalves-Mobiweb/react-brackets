import { IRoundProps } from "./Rounds";
export declare type IMobileProps = {
    mobileBreakpoint?: number;
};
export declare type ISeedProps = {
    id: number | string;
    teams: {
        name?: string;
        members?: string[];
        [key: string]: any;
    }[];
    date?: string;
    mobileBreakpoint?: number;
    [key: string]: any;
};
export interface IRenderSeedProps {
    seed: ISeedProps;
    breakpoint: number;
    roundIndex: number;
    seedIndex: number;
    rounds: IRoundProps[];
}
