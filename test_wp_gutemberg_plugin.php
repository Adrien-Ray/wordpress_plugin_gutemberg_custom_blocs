<?php
/**
 * Plugin Name:       test-wp-gutemberg-plugin
 * Description:       test de creation de plugin wordpress pour la génération de blocs gutemberg custom.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            https://portfolio.accesdenied.net/pages/apropos.php
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-wp-gutemberg-plugin
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function add_custom_category( $categories ) {
    $categories[] = [
    	'slug' => 'test',
    	'title' => 'test',
    ];

    return $categories;
}
add_filter( 'block_categories_all', 'add_custom_category' );


function create_block_test_wp_gutemberg_plugin_block_init() {
	register_block_type( __DIR__ . '/build/test_1' );
	register_block_type( __DIR__ . '/build/test_2' );
}
add_action( 'init', 'create_block_test_wp_gutemberg_plugin_block_init' );
