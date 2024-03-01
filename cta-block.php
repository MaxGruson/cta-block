<?php
/**
 * Plugin Name:       CTA Block
 * Description:       Een “call to action” (CTA) vestigt speciale aandacht op een handeling, zoals “Download hier het jaarverslag”. Het Call To Action-blok bestaat uit een titel, omschrijving en link.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            <a href="https://max.gruson.studio" target="_blank">Max Gruson</a>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cta-block
 *
 * @package           maxgruson/cta-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cta_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cta_block_init' );
