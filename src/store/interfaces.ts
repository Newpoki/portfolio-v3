import { store } from "./store";

export interface ISelectorToken {
  attempt: number;
  value: number;
}

/** Autocomaticaly computed store interface */
export type IRootState = ReturnType<typeof store.getState>;

/** A redux useDispatch override to handle the async thunks contaiend in redux toolkit */
export type IAppDispatch = typeof store.dispatch;
