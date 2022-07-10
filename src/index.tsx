import { requireNativeComponent } from 'react-native'

const isFabricEnabled = global.nativeFabricUIManager != null;

const UnicornNative = isFabricEnabled ? require("./UnicornViewNativeComponent") : null

export const UnicornView = UnicornNative ? UnicornNative.default: requireNativeComponent("UnicornView")

export const Commands = UnicornNative ? UnicornNative.Commands: {}
