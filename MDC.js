function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMDC(b, a % b);
    }
}

// Exemplo de uso
const n1 = 44;
const n2 = 55;
const mdc = calcularMDC(n1, n2);
console.log("MDC de", n1, "e", n2, "é", mdc);
