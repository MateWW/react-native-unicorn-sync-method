package com.reactnativeunicorn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;

import java.util.Map;


public class UnicornViewManager extends SimpleViewManager<UnicornView> {

  ReactApplicationContext mCallerContext;

  public UnicornViewManager(ReactApplicationContext reactContext) {
    mCallerContext = reactContext;
  }

  @Override
  public String getName() {
    return UnicornViewManagerImpl.NAME;
  }

  @Override
  public UnicornView createViewInstance(ThemedReactContext context) {
    return UnicornViewManagerImpl.createViewInstance(context);
  }

  @Override
  public Map<String, Integer> getCommandsMap() {
    return MapBuilder.of("changeBackgroundColor", 1);
  }

  @Override
  public void receiveCommand(
    @NonNull UnicornView view,
    String commandId,
    @Nullable ReadableArray args
  ) {
    super.receiveCommand(view, commandId, args);
    String color = args.getString(0);

    switch (commandId) {
      case "changeBackgroundColor":
        setColor(view, color);
        break;
      default: {}
    }
  }


  @ReactProp(name = "color")
  public void setColor(UnicornView view, String color) {
    UnicornViewManagerImpl.setColor(view, color);
  }
}
