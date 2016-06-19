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


	// // create constant + action
	// plop.setGenerator('constant + action', {
	// 	description: 'Create constant & action',
	// 	prompts: [
	// 		{
	// 			type: 'input',
	// 			name: 'domain',
	// 			message: 'Part of the app this action should govern',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'domain is required';
	// 			}
	// 		},
	// 		{
	// 			type: 'input',
	// 			name: 'action',
	// 			message: 'Enter action',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'action is required';
	// 			}
	// 		},
	// 		{
	// 			type: 'input',
	// 			name: 'async',
	// 			message: 'Is async? leave BLANK for synchronous'
	// 		}
	// 	],
	// 	actions: [
	// 		// create action file
	// 		{
	// 			type: 'add',
	// 			path: ROOT + '/actions/{{ dashCase domain }}.js',
	// 			templateFile: 'plop-templates/action.txt'
	// 		},
	// 		// modify to import action function
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/actions/{{ dashCase domain }}.js',
	// 			pattern: /(\/\*actions\*\/)/gi,
	// 			templateFile: 'plop-templates/action-function.txt'
	// 		},
	// 		// create action constant
	// 		{
	// 			type: 'add',
	// 			path: ROOT + '/constants/actions.js',
	// 			template: '/*actions*/'
	// 		},
	// 		// insert action constant
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/constants/actions.js',
	// 			pattern: /(\/\*actions\*\/)/gi,
	// 			template: '$1\r\nexport const {{constantCase action}} = \'{{constantCase action}}\';'
	// 		},
	// 		// insert action into reducer
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/reducers/{{ dashCase domain }}.js',
	// 			pattern: /(\/\*reducers\*\/)/gi,
	// 			templateFile: 'plop-templates/reducer-function.txt'
	// 		},

	// 	]
	// });
	// // -- end action



	// // create reducer + action
	// plop.setGenerator('First time action creator!', {
	// 	description: 'Create constant & action & reducer & include reducer',
	// 	prompts: [
	// 		{
	// 			type: 'input',
	// 			name: 'domain',
	// 			message: 'Part of the app this action should govern',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'domain is required';
	// 			}
	// 		},
	// 		{
	// 			type: 'input',
	// 			name: 'action',
	// 			message: 'Enter action',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'action is required';
	// 			}
	// 		},
	// 		{
	// 			type: 'input',
	// 			name: 'async',
	// 			message: 'Is async? leave BLANK for synchronous'
	// 		}
	// 	],
	// 	actions: [
	// 		// create reducer
	// 		{
	// 			type: 'add',
	// 			path: ROOT + '/reducers/{{ dashCase domain }}.js',
	// 			templateFile: 'plop-templates/reducer.txt'
	// 		},
	// 		// modify to import reducer
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/reducers/index.js',
	// 			pattern: /(\/\*imports\*\/)/gi,
	// 			template: '$1\r\nimport {{camelCase domain}} from \'../reducers/{{dashCase domain}}\''
	// 		},
	// 		// modify to combine reducer
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/reducers/index.js',
	// 			pattern: /(\/\*combine\*\/)/gi,
	// 			template: '$1\r\n{{camelCase domain}},'
	// 		},
	// 		// create action file
	// 		{
	// 			type: 'add',
	// 			path: ROOT + '/actions/{{ dashCase domain }}.js',
	// 			templateFile: 'plop-templates/action.txt'
	// 		},
	// 		// modify to import action function
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/actions/{{ dashCase domain }}.js',
	// 			pattern: /(\/\*actions\*\/)/gi,
	// 			templateFile: 'plop-templates/action-function.txt'
	// 		},
	// 		// create action constant
	// 		{
	// 			type: 'add',
	// 			path: ROOT + '/constants/actions.js',
	// 			template: '/*actions*/'
	// 		},
	// 		// insert action constant
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/constants/actions.js',
	// 			pattern: /(\/\*actions\*\/)/gi,
	// 			template: '$1\r\nexport const {{constantCase action}} = \'{{constantCase action}}\';'
	// 		},
	// 		// insert action into reducer
	// 		{
	// 			type: 'modify',
	// 			path: ROOT + '/reducers/{{ dashCase domain }}.js',
	// 			pattern: /(\/\*reducers\*\/)/gi,
	// 			templateFile: 'plop-templates/reducer-function.txt'
	// 		},

	// 	]
	// });
	// // -- end action



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
