/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, isSelected, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
            { attributes.message && ! isSelected ? (
                <div>{ attributes.message }</div>
            ) : (
                <Placeholder
                    label="Gutenpride Block"
                    instructions="Add your message"
                >
                    <TextControl
                        value={ attributes.message }
                        onChange={ ( val ) =>
                            setAttributes( { message: val } )
                        }
                    />
                </Placeholder>
            ) }
		</div>
	);
}
