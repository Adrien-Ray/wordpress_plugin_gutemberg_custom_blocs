/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	return (
		<div className="parent__cardGallery" { ...useBlockProps.save() }>
			{ props.attributes.content }
			<figure>
				<img src={ props.attributes.main_url } alt={ props.attributes.main_alt } />
				<figcaption>{ props.attributes.main_alt }</figcaption>
			</figure>
		</div>
	);
}
