// Order n hexagonal

const vertices = [];

const faces = [];

// cfe
function a(v) {
    return [v[0], v[1], (v[2] + 3 * v[3]) / 2, (v[2] - v[3]) / 2];
}

//cfv
function b(v) {
    return [v[0], v[1], v[2], -v[3]];
}

//fev
function c(v) {
    return [v[0], -v[1], v[2], v[3]];
}

//cev
function d(n, v) {

    const c = Math.cos(Math.PI / n) ** 2;
    return [
        (1 + 2 * c) * v[0] - 2 * c * v[1] - c * v[2] - c * v[3],
        2 * c * v[0] + (1 - 2 * c) * v[1] - c * v[2] - c * v[3],
        3 * v[0] - 3 * v[1] - v[2] / 2 - 3 * v[3] / 2,
        v[0] - v[1] - v[2] / 2 + v[3] / 2
    ];
}

function e(v) {
    return [v[0], v[1], v[2], v[3]];
}

function f(n, v) {

    const c = Math.cos(Math.PI / n) ** 2;
    const den = Math.sqrt(3 - 4 * c);

    return [
        Math.sqrt(3) * v[0] / den,
        Math.sqrt(3) * v[1] / den,
        Math.sqrt(c) * v[2] / den,
        Math.sqrt(3 * c) * v[3] / den
    ];

}

function matrixDict(order, letter, vector) {
    var newVector;
    switch (letter) {
        case 'a':
            newVector = a(vector);
            break;
        case 'b':
            newVector = b(vector);
            break;
        case 'c':
            newVector = c(vector);
            break;
        case 'd':
            newVector = d(order, vector);
            break;
        case 'e':
            newVector = e(vector);
            break;
        case 'f':
            newVector = f(order, vector);
            break;
    }
    return newVector;
};


const faceReflections = [];

const center = [1, 1, 0, 0];

export { vertices, faces, a, b, c, d, e, f, matrixDict, faceReflections, center };
