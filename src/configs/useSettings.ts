import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from 'src/configs/settingsContext'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
