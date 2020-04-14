import { produceSingleton } from "./singleton-fp";

export const i18nConfig = produceSingleton()
i18nConfig.getInstance()
export const themeConfig = produceSingleton()
export const filteringConfig = produceSingleton()

import { SingletonFactory } from './singleton-oop'

export const _i18nConfig = SingletonFactory.produce
_i18nConfig().getInstance()
export const _themeConfig = SingletonFactory.produce()
export const _filteringConfig = SingletonFactory.produce()
