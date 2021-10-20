"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Starting to populate...");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    await strapi.services.game.populate(options);

    ctx.send("Finished populating!");
  },
};


// GET POST PELO TERMINAL
//  - curl -X POST  http://localhost:1338/games/populate 
//  - curl -X POST  http://localhost:1338/games/populate\?page\=2