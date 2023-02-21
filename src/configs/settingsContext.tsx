// ** React Imports
import { createContext, ReactNode } from 'react'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'
import {AppBar, ContentWidth, Mode, Skin, ThemeColor, VerticalNavToggle} from "../components/layouts/types";
import {Direction} from "@mui/material";

export type Settings = {
  skin: Skin
  mode: Mode
  appBar?: AppBar
  navHidden?: boolean // navigation menu
  appBarBlur: boolean
  direction: Direction
  navCollapsed: boolean
  themeColor: ThemeColor
  contentWidth: ContentWidth
  layout?: 'vertical' | 'horizontal'
  lastLayout?: 'vertical' | 'horizontal'
  verticalNavToggleType: VerticalNavToggle
  toastPosition?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

interface SettingsProviderProps {
  children: ReactNode
}

export type SettingsContextValue = {
  settings: Settings
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  layout: themeConfig.layout,
  lastLayout: themeConfig.layout,
  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  appBarBlur: themeConfig.appBarBlur,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  toastPosition: themeConfig.toastPosition,
  verticalNavToggleType: themeConfig.verticalNavToggleType,
  appBar: themeConfig.appBar
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings
})

export const SettingsProvider = ({ children }: SettingsProviderProps) => (
  <SettingsContext.Provider value={{ settings:initialSettings }}>{children}</SettingsContext.Provider>
)

export const SettingsConsumer = SettingsContext.Consumer
