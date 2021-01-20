'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
	lifecycles: {
		async afterDelete(result, params) {
			console.log(result, 'WAS DELETED');
			strapi.log.info(params, 'was THE PARAMS');
		},
	},
};
