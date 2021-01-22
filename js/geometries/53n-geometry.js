import * as ORDERN from "../data/53n.js";
import { hyperbolicGeometry } from "./hyperbolic-geometry.js";
import { sphericalGeometry } from "./spherical-geometry.js";

function dodecahedronGeometry(transform, order, refinement, compact, metric, model) {

    const vertices = ORDERN.vertices;
    const faces = ORDERN.faces;
    const numberOfSides = 5;
    const d = 1;
    
    function matrixDict(letter, vector) {
        return ORDERN.matrixDict(order, letter, vector);
    }

    var dodecahedron;

    if (metric == "spherical") {

        dodecahedron = sphericalGeometry(vertices, faces, matrixDict, transform, numberOfSides, refinement, ORDERN.faceReflections, d);

    } else if (metric == "hyperbolic") {

        dodecahedron = hyperbolicGeometry(vertices, faces, matrixDict, transform, numberOfSides, refinement, compact, ORDERN.faceReflections, model);

    }

    return [dodecahedron, ORDERN.faceReflections];

}

export { dodecahedronGeometry };