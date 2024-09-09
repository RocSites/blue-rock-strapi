'use strict';

/**
 * liquor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liquor.liquor');
