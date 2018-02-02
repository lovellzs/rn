package com.example;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class MyClass {

    public static void main(String[] args){

        System.out.println("============");


        ArrayList<String> list  = getOrderIds();

        for(String str : list){
            System.out.println("=========str===" + str);
        }

        while (list.size()>0){
            String orderstr = list.remove(0);
            HashMap<String ,String > gamepayresult = new HashMap<>();
            gamepayresult.put("cpOrderId",orderstr);
            paySuccess(gamepayresult,"",1);

        }

    }

    public static ArrayList<String> getOrderIds(){
        String orders = "aaa,bbb,ccc,ddd";
        String []ods = orders.split(",");

        ArrayList<String> list = null;
        if(ods!=null && ods.length>0){
            list = new ArrayList<>();
            for(String str : ods){
                list.add(str);
            }
        }
        return list;
    }

    public static void paySuccess(final Map<String,String > payResult,final String sdkOrderId , final  int reqCount){
        System.out.println("======sdkOrderId======" + payResult.get("cpOrderId").toString());
    }

}
