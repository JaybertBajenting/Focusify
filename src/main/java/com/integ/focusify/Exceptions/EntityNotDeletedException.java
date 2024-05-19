package com.integ.focusify.Exceptions;

public class EntityNotDeletedException  extends RuntimeException{

    public EntityNotDeletedException(String message) {
        super(message);
    }

    public EntityNotDeletedException(String message, Throwable cause) {
        super(message, cause);
    }
}
