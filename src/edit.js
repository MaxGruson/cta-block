/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {__experimentalLinkControl as LinkControl, useBlockProps, RichText, BlockControls} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';

import { useState } from '@wordpress/element';

import { link } from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const [ showLinkPopover, setShowLinkPopover ] = useState( false );
	const toggleLinkPopover = () => {
			setShowLinkPopover( state => ! state );
	};

	return (
		<>
		{/* Toolbar zone */}
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={link}
					label={__('Link', 'cta-bock')}
					onClick={toggleLinkPopover}
					isPressed={showLinkPopover}
				/>
			</ToolbarGroup>
			{showLinkPopover && (
				<Popover>
					<LinkControl
						searchInputPlaceholder={__('Zoek of typ URL', 'cta-block')}
						value={ attributes.link }
						onChange={ ( newLink ) => {
							setAttributes( { link: {...newLink || ''} } ) }
						}
						required
					>
					</LinkControl>
				</Popover>
			)}
		</BlockControls>
		{/* End Toolbar zone */}

		{/* Main block zone */}
		<div { ...useBlockProps() }>
			<RichText 
				tagName='h2'
				allowedFormats={[]}
				value={attributes.heading}
				onChange={(heading) => setAttributes({heading})}
				placeholder={__( 'Titel (bijv. Jaarverslag)', 'cta-block')}
				required
			/>
			<RichText 
				tagName='p'
				allowedFormats={[
					'core/italic',
					'core/bold',
					'core/strikethrough',
					'core/subscript',
					'core/superscript',
					'core/underline'
				]}
				value={attributes.body}
				onChange={(body) => setAttributes({body})}
				placeholder={__( 'Omschrijving (bijv. Download hier het verslag van alle activiteiten dit jaar)', 'cta-block')}
				required
			/>
			<RichText 
					tagName='div'
					className='wp-element-button wp-block-button__link'
					allowedFormats={[]}
					value={() => {
						if ( attributes.link ) {
							attributes.link.title;
						}
					}}
					onChange={(newTitle) => setAttributes({link: {...attributes.link, title: newTitle}})}
					placeholder={__( 'Knoptekst (bijv. Downloaden)', 'cta-block')}
					required
				/>
		</div>
		{/* End Main block zone */}
		</>
	);
}
