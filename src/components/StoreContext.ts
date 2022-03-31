

import React from "react";
import { reduxStore, StoreType } from "../state/redux/redux-store";

export const StoreContext = React.createContext<StoreType>(reduxStore)
