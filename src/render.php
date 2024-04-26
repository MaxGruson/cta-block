<?php
/**
 * CTA block template.
 *
 * @param   array $attributes - A clean associative array of block attributes.
 * @param   array $block - All the block settings and attributes.
 * @param   string $content - The block inner HTML (usually empty unless using inner blocks).
 *
 * @package maxgruson/cta-block
 */

$heading    = $attributes['heading'] ?? '';
$subheading = $attributes['subheading'] ?? '';
?>


<hgroup <?php echo get_block_wrapper_attributes(); ?>>
	<h2><?php echo wp_kses_post( $heading ); ?></h2>
	<h3><?php echo wp_kses_post( $subheading ); ?></h3>
</hgroup>
