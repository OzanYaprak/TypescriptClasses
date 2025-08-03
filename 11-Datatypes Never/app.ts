function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

throwError("Hata Mesajı");

// Void ile farkı void e null ve undefined tanımlanabilinir fakat never a tanımlanamaz.