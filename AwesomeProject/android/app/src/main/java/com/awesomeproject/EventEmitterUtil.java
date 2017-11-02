package com.awesomeproject;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by apple on 2017/11/2.
 */

public class EventEmitterUtil {

    private static EventEmitterUtil _instance = null;

    private EventEmitterUtil(){

    }

    public static EventEmitterUtil getInstance(){
        if(_instance == null){
            _instance = new EventEmitterUtil();
        }
        return _instance;
    }

    /**
     * 发事件
     * @param reactContext
     * @param eventName
     * @param params
     */
    public void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


}
