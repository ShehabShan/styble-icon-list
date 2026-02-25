import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import * as LucideIcons from 'lucide-react';
import { RangeControl, PanelBody } from '@wordpress/components';
import UploadIcon from '../icon-list/side-control-bar/uploadIcon.js';
import { useState } from '@wordpress/element';

import { getIconStyles } from '../utils/style.js';

export default function Edit( { attributes, setAttributes } ) {
	const { iconType, iconUrl, selectedIcon, iconSize, iconColor } = attributes;
	const [ openModalId, setOpenModalId ] = useState( null );
	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};
	const isModalOpen = ( id ) => openModalId === id;
	const closeAllModals = () => setOpenModalId( null );

	const iconPickerStyle = getIconStyles( attributes );

	const SelectedIcon = LucideIcons[ selectedIcon ];

	const blockProps = useBlockProps( {
		className: 'wp-block-create-block-icon-picker',
		style: { ...iconPickerStyle },
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon Settings', 'icon-list' ) }>
					<UploadIcon
						attributes={ attributes }
						setAttributes={ setAttributes }
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
					/>

					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Icon Size', 'icon-list' ) }
						value={ iconSize }
						onChange={ ( value ) =>
							setAttributes( { iconSize: value } )
						}
						min={ 20 }
						max={ 100 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div
					className="icon-wrapper"
					style={ {
						width: 'auto',
						height: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
					} }
				>
					{ iconType === 'upload' && iconUrl ? (
						<img
							src={ iconUrl }
							alt="Custom Icon"
							style={ {
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							} }
						/>
					) : (
						SelectedIcon && (
							<SelectedIcon
								size={ iconSize }
								color={ iconColor }
							/>
						)
					) }
				</div>
			</div>
		</>
	);
}
