package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
//@RequestMapping注解是用来映射请求的，
// 即指明处理器可以处理哪些URL请求，该注解既可以用在类上，也可以用在方法上。
public class BotInfoController {
    @RequestMapping("getbotinfo/")

    public Map<String,String> getBotInfo(){
        Map<String, String> bot1 = new HashMap<>();
        bot1.put("name", "tiger");
        bot1.put("rating", "1500");
        return bot1;
    }
}
