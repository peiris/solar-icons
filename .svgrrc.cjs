module.exports = {
	expandProps: "true",
	dimensions: false,
	svgProps: {
		role: "img",
		strokeWidth: `{props.strokeWidth ? props.strokeWidth : 1.5}`,
		width: 24,
		height: 24,
	},
	replaceAttrValues: {
		"#1C274C": "currentColor",
	},
	typescript: true,
	filenameCase: "kebab",
};
