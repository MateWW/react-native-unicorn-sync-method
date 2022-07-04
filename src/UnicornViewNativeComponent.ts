import codegenNativeComponent, { NativeComponentType } from 'react-native/Libraries/Utilities/codegenNativeComponent';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import type {  ViewProps } from 'react-native';

interface NativeProps extends ViewProps  {
  color?: string,
};

export type UnicornViewType = NativeComponentType<NativeProps>;


interface NativeCommands {
  changeBackgroundColor: (
      viewRef: React.ElementRef<UnicornViewType>,
      color: string,
  ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['changeBackgroundColor'],
});

export default codegenNativeComponent<NativeProps>('UnicornView');