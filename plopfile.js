const ROOT = 'src';

module.exports = function(plop) {

  // create util function
  plop.setGenerator('util', {
    description : 'Create Utility function',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/utils/{{ dashCase name }}.js',
        templateFile : './plop-templates/util.txt'
      }
    ]
  });

	// create container
	plop.setGenerator('container', {
		description : 'Create Container Component',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/containers/{{ properCase name }}.js',
				templateFile : './plop-templates/container.txt'
			},
			// modify to import container into app.js
			{
				type: 'modify',
				path: ROOT + '/routes.js',
				pattern: /(\/\*containers\*\/)/gi,
				template: '$1\r\nimport {{properCase name}} from \'./containers/{{properCase name}}\''
			},
		]
	});
	// -- end container


	// // create reducer
	// plop.setGenerator('reducer', {
  //   description: 'Create reducer',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'name',
  //       validate: function (value) {
  //         if ((/.+/).test(value)) { return true; }
  //         return 'name is required';
  //       }
  //     }
  //   ],
  //   actions: [
  //     // create file
  //     {
  //       type: 'add',
  //       path: ROOT + '/reducers/{{ dashCase name }}.js',
  //       templateFile: 'plop-templates/reducer.txt'
  //     },
	// 		// modify to import reducer
  //     {
  //       type: 'modify',
  //       path: ROOT + '/reducers/index.js',
  //       pattern: /(\/\*imports\*\/)/gi,
  //       template: '$1\r\nimport {{camelCase name}} from \'../reducers/{{dashCase name}}\''
  //     },
	// 		// modify to combine reducer
  //     {
  //       type: 'modify',
  //       path: ROOT + '/reducers/index.js',
  //       pattern: /(\/\*combine\*\/)/gi,
  //       template: '$1\r\n{{camelCase name}}'
  //     },
  //   ]
  // });
	// // -- end reducer
	//
	//

	// create component
	plop.setGenerator('component', {
		description : 'Create Component',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/components/{{ properCase name }}/{{properCase name}}.js',
				templateFile : './plop-templates/component.txt'
			}
		]
	});
	// -- end component

}
