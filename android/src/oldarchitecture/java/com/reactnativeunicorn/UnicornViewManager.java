package com.reactnativeunicorn;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;
import android.graphics.Color;

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

  @ReactProp(name = "color")
  public void setColor(UnicornView view, String color) {
    UnicornViewManagerImpl.setColor(view, color);
  }
}
