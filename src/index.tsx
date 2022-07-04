import { requireNativeComponent } from 'react-native'

const isFabricEnabled = global.nativeFabricUIManager != null;

const unicornView = isFabricEnabled ?
    require("./UnicornViewNativeComponent").default :
    requireNativeComponent("UnicornView")

export default unicornView;