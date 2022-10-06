"use strict"

try {
    x = 10;
} catch (error) {
    console.log(error);
} finally {
    console.log("Termina la revisión de errores")
}

console.log("Continuamos...");