/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('products').truncate()
  await knex('products').insert([
    {product_name: 'tee-shirt', product_price: 50},
    {product_name: 'tee-shirts', product_price: 51},
    {product_name: 'tee-shirtss', product_price: 52},
    {product_name: 'tee-shirtss', product_price: 53},
    {product_name: 'tee-shirtss', product_price: 54}
  ]);
};
