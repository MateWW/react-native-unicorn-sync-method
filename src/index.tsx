const isFabricEnabled = global.nativeFabricUIManager != null;

const UnicornNative = isFabricEnabled ? require("./UnicornViewNativeComponent") : require("./OldUnicornView");

export const UnicornView = UnicornNative.default;

export const Commands = UnicornNative.Commands;