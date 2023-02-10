package com.example.LoginTest.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;


@Aspect
@Slf4j
public class LoggingAspect {
    @Before(value = "com.example.LoginTest.*Service.*(..))")
    public void log(JoinPoint joinPoint) {
        log.info("Entering {}, {}", joinPoint.getTarget().getClass().getSimpleName(), joinPoint.getSignature().getName());

        Object[] args = joinPoint.getArgs();
        for (int i =0; i < args.length; i++) {
            log.info("args[{}] -->", args[i]);

        }
    }
}
