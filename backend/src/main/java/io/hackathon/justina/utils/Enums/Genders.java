package io.hackathon.justina.utils.Enums;

public enum Genders {
    FEMALE,
    MALE,
    NOT_BINARY,
    TRANS_GENDER,
    NOT_SPECIFIED;

    public static Genders ofString(String authority) {
        return Genders.valueOf(authority.toUpperCase());
    }

}
