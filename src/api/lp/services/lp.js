'use strict';

/**
 * lp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lp.lp');
