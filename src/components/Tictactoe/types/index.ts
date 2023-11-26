import { SideSign } from "@types";

export type SquareId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type GameIssue = "running" | "win" | "lose" | "draw";
export type ResetBoard = boolean | "pending";
export type SquareState = SideSign | null;