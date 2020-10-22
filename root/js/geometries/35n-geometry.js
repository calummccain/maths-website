import * as ORDERN from "../data/hyperbolic/35n.js";
import * as GEOM from "../geometries/hyperbolic-geometry.js";

function hyperbolicIcosahedronGeometry(transform, order, refinement, compact) {

    const vertices = ORDERN.vertices;
    const faces = ORDERN.faces;
    const numberOfSides = 3;

    function matrixDict(letter, vector) {
        return ORDERN.matrixDict(order, letter, vector);
    }

    var icosahedron = GEOM.hyperbolicGeometry(vertices, faces, matrixDict, transform, numberOfSides, refinement, compact)

    return icosahedron;

}

export { hyperbolicIcosahedronGeometry };