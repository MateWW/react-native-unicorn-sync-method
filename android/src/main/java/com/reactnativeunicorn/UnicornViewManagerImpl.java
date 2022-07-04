package com.reactnativeunicorn;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;
import android.graphics.Color;

public class UnicornViewManagerImpl {

  public static final String NAME = "UnicornView";
  ReactApplicationContext mCallerContext;

  public static UnicornView createViewInstance(ThemedReactContext context) {
    return new UnicornView(context);
  }

  public static void setColor(UnicornView view, String color) {
    view.setBackgroundColor(Color.parseColor(color));
  }
}
