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

$heading = $attributes['heading'] ?? '';
$body    = $attributes['body'] ?? '';
$link    = $attributes['link'] ?? '';
?>


<div <?php echo get_block_wrapper_attributes(); ?>>
	<h2><?php echo wp_kses_post( $heading ); ?></h2>
	<p><?php echo wp_kses_post( $body ); ?></p>
	<?php if ( ! empty( $link ) ) { ?>
	<a target="<?php echo isset( $link['opensInNewTab'] ) ? '_blank' : '_self'; ?>" 
		href="<?php echo esc_url( $link['url'] ); ?>" 
		class="wp-block-button__link">
		<?php echo wp_kses_post( $link['title'] ); ?>
	</a>
	<?php } else { ?>
	<a href="#" class="wp-block-button__link">
		&nbsp;
	</a>
	<?php } ?>
</div>
