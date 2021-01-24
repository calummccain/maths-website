// Order n octahedral

const vertices = [
    [1, 1, 0, 0],
    [1, -1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, -1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, -1]
];


const edges = [
    [0, 2],
    [0, 3],
    [0, 4]
    [0, 5],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [4, 3],
    [3, 5],
    [5, 2]
];


const faces = [
    [0, 2, 4],
    [0, 5, 2],
    [0, 4, 3],
    [0, 3, 5],
    [1, 4, 2],
    [1, 2, 5],
    [1, 3, 4],
    [1, 5, 3]
];


function a(v) {

    return [v[0], v[2], v[1], v[3]];

}


function b(v) {

    return [v[0], v[1], v[3], v[2]];

}


function c(v) {

    return [v[0], v[1], v[2], -v[3]];

}


//fev
function d(n, v) {

    if (n == 3) {

        return [
            (v[0] + v[1] + v[2] + v[3]) / 2,
            (v[0] + v[1] - v[2] - v[3]) / 2,
            (v[0] - v[1] + v[2] - v[3]) / 2,
            (v[0] - v[1] - v[2] + v[3]) / 2
        ];

    } else if (n == 4) {

        return [
            2 * v[0] - v[1] - v[2] - v[3],
            v[0] - v[2] - v[3],
            v[0] - v[1] - v[3],
            v[0] - v[1] - v[2]
        ];

    } else {

        var cos = Math.cos(Math.PI / n) ** 2;

        return [
            (6 * cos - 1) * v[0] + (2 - 6 * cos) * v[1] + (2 - 6 * cos) * v[2] + (2 - 6 * cos) * v[3],
            2 * cos * v[0] + (1 - 2 * cos) * v[1] - 2 * cos * v[2] - 2 * cos * v[3],
            2 * cos * v[0] - 2 * cos * v[1] + (1 - 2 * cos) * v[2] - 2 * cos * v[3],
            2 * cos * v[0] - 2 * cos * v[1] - 2 * cos * v[2] + (1 - 2 * cos) * v[3]
        ];

    }

}


function e(v) {

    return [v[0], v[1], v[2], v[3]];

}


function f(n, v) {

    if (n == 3) {

        return [v[0] / Math.sqrt(2), v[1] / Math.sqrt(2), v[2] / Math.sqrt(2), v[3] / Math.sqrt(2)]

    } else if (n == 4) {

        return v;

    } else {

        var cot = 1 / (Math.tan(Math.PI / n) ** 2);

        return [
            Math.sqrt(Math.abs(cot / (1 - cot))) * v[0],
            Math.sqrt(Math.abs((2 * cot - 1) / (1 - cot))) * v[1],
            Math.sqrt(Math.abs((2 * cot - 1) / (1 - cot))) * v[2],
            Math.sqrt(Math.abs((2 * cot - 1) / (1 - cot))) * v[3]
        ];

    }

}


function matrixDict(n, letter, vector) {

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
            newVector = d(n, vector);
            break;
        case 'e':
            newVector = e(vector);
            break;
        case 'f':
            newVector = f(n, vector);
            break;
    }

    return newVector;

}


const faceReflections = ['', 'c', 'bc', 'cbc', 'abc', 'cabc', 'bcabc', 'cbcabc'];


function center(n) {

    if (n == 3) {

        return [Math.sqrt(2), 0, 0, 0];

    } else if (n == 4) {

        return [1, 0, 0, 0];

    } else {

        var cot = 1 / (Math.tan(Math.PI / n) ** 2);

        return [1 / Math.sqrt(Math.abs(cot / (1 - cot))), 0, 0, 0];
    }

}


export { vertices, edges, faces, a, b, c, d, e, f, matrixDict, faceReflections, center };