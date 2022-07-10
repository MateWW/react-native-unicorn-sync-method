import { findNodeHandle, HostComponent, requireNativeComponent, UIManager } from "react-native";

const UnicornView = requireNativeComponent("UnicornView");


export const Commands = {
  changeBackgroundColor: (viewRef: React.ElementRef<HostComponent<unknown>>, color: string) =>{
      const viewId = findNodeHandle(viewRef);
      console.log('[123!@#] test', UIManager.getViewManagerConfig('UnicornView').Commands, UIManager.getViewManagerConfig('UnicornView').Commands.changeBackgroundColor)
      UIManager.dispatchViewManagerCommand(
        viewId,
        "changeBackgroundColor",
        [color]
      );
    }
}


export default UnicornView