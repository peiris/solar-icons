const propTypesTemplate = (
	{ imports, interfaces, componentName, props, jsx, exports },
	{ tpl }
) => {
	return tpl`${imports}

${interfaces}

const ${componentName} = (${props}) => {
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
