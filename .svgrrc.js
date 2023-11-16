module.exports = {
	expandProps: "start",
	svgProps: {
		role: "img",
		className: `{props.className ? props.className + ' h-6 w-6' : 'h-6 w-6'}`,
	},
	replaceAttrValues: {
		"#1C274C": "currentColor",
	},
	typescript: true,
	dimensions: true,
	filenameCase: "kebab",
};
