package com.sz.module;

import com.awesomeproject.EventEmitterUtil;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;

/**
 * Created by apple on 2017/11/2.
 */

public class UIManagerModule extends ReactContextBaseJavaModule {

    public UIManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UIManagerModule";
    }


    @ReactMethod
    public void measureLayout(
            int tag,
            int ancestorTag,
            Callback errorCallback,
            Callback successCallback) {

        float[] mMeasureBuffer = new float[]{50f,100f,150f,200f};
        try {
//            measureLayout(tag, ancestorTag, mMeasureBuffer);

            float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);
            float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);
            float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);
            float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);

            WritableMap params = Arguments.createMap();
            params.putString("aaa","myaaa");
            EventEmitterUtil.getInstance().sendEvent( getReactApplicationContext() ,"keyboardWillShow", params );

            successCallback.invoke(relativeX, relativeY, width, height);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}
