import { produceSingleton } from "./singleton-fp";

export const i18nConfig = produceSingleton()
export const themeConfig = produceSingleton()
export const filteringConfig = produceSingleton()
