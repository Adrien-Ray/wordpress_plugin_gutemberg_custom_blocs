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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
    const blockProps = useBlockProps()

    // La fonction qui met à jour la valeur
    const onChangeUrl = event => {
        props.setAttributes({
            main_url: event.target.value
        })
    }
    const onChangeAlt = event => {
        props.setAttributes({
            main_alt: event.target.value
        })
    }

    return ( <div {...blockProps }> {
            props.isSelected ? ( // N'afficher le champ seulement si le bloc est actif
                <div>
                    <h2>card of gallerie</h2>
                    <input
                        type = 'text'
                        value = { props.attributes.main_url }
                        onChange = { onChangeUrl }
                        placeholder = { __('url of main pic', '') }
                    /><br></br>
                    <input
                        type = 'string'
                        value = { props.attributes.main_alt }
                        onChange = { onChangeAlt }
                        placeholder = { __('title of gallerie', '') }
                    />
                    <h2>gallerie</h2>
                </div>
            ) : ( 
                <div className="parent__cardGallery">
                    <figure>
                        <img src={ props.attributes.main_url } alt={ props.attributes.main_alt } />
                        <figcaption>{ props.attributes.main_alt }</figcaption>
                    </figure>
                </div>)
        } </div>
    )
}