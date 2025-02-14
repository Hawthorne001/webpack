/** @type {import("../../../../").Configuration} */
module.exports = {
	optimization: {
		mangleExports: true,
		usedExports: true,
		providedExports: true,
		sideEffects: false // disable reexports optimization
	}
};
