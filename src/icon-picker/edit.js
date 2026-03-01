import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';

import {
	RangeControl,
	PanelBody,
	Button,
	Popover,
	TabPanel,
	ToggleControl,
} from '@wordpress/components';
import UploadIcon from '../icon-list/side-control-bar/uploadIcon.js';
import { useEffect, useRef, useState } from '@wordpress/element';

import { getIconPickerBlockStyles } from '../utils/style.js';
import editIcon from '../assests/edit-icon.svg';
import resetIcon from '../assests/reset.svg';
import settingsIcon from '../assests/setting.svg';
import paletteIcon from '../assests/palette.svg';

import ChildItemStyle from '../icon-list-item/ChildItemStyle.js';
import { useGrandparentAttributes } from '../hooks/useGrandparentAttributes.js';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const gAttrs = useGrandparentAttributes( clientId );

	const prevGrand = useRef( {} );

	useEffect( () => {
		const current = gAttrs || {};
		const previous = prevGrand.current || {};

		// Find which grandparent keys actually changed
		const changedKeys = Object.keys( current ).filter(
			( key ) => current[ key ] !== previous[ key ]
		);

		if ( changedKeys.length === 0 ) {
			return;
		}

		const updates = {};

		changedKeys.forEach( ( key ) => {
			// Only update child if value truly differs
			if ( attributes[ key ] !== current[ key ] ) {
				updates[ key ] = current[ key ];
			}
		} );

		if ( Object.keys( updates ).length > 0 ) {
			setAttributes( updates );
		}

		// Update snapshot memory
		prevGrand.current = { ...current };
	}, [ gAttrs, attributes, setAttributes ] );

	useEffect( () => {
		if ( attributes.iconType === 'library' ) {
			if ( attributes.backgroundColor !== '#000000' ) {
				setAttributes( {
					backgroundColor: '#000000',
					childPadding: 10,
				} );
			}
		} else if ( attributes.iconType === 'upload' ) {
			if ( attributes.backgroundColor ) {
				setAttributes( { backgroundColor: '', childPadding: 0 } );
			}
		}
	}, [ attributes.iconType ] ); // Only runs when the user switches between library and upload

	const [ openModalId, setOpenModalId ] = useState( null );
	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};
	const isModalOpen = ( id ) => openModalId === id;
	const closeAllModals = () => setOpenModalId( null );

	const iconPickerStyle = getIconPickerBlockStyles( attributes );

	const blockProps = useBlockProps( {
		className: 'wp-block-create-block-icon-picker',
		style: { ...iconPickerStyle },
	} );

	const renderTabContent = ( tab ) => {
		if ( tab.name === 'settings' ) {
			return (
				<>
					<UploadIcon
						attributes={ attributes }
						setAttributes={ setAttributes }
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
					/>

					<div className="url-link-container">
						<URLInput
							className="url-container"
							label="Add Link"
							value={ attributes?.url }
							onChange={ ( nextUrl ) =>
								setAttributes( { url: nextUrl } )
							}
							placeholder="Type or paste your URL"
						/>
						<Button
							className="pencil-edit-button"
							icon={
								<img
									src={ editIcon }
									alt={ __( 'Edit', 'icon-picker' ) }
									style={ {
										width: '36px',
										height: '36px',
									} }
								/>
							}
							onClick={ () =>
								setAttributes( {
									hasLink: ! attributes?.hasLink,
								} )
							}
						/>

						{ attributes?.hasLink && (
							<Popover
								onClose={ () => closeAllModals }
								placement="bottom"
								offset={ 10 }
							>
								<div className="link-popover-container">
									<ToggleControl
										className="my-custom-troggle"
										label={ __(
											'open in new tab',
											'icon-picker'
										) }
										checked={ attributes?.newTab }
										onChange={ ( value ) =>
											setAttributes( { newTab: value } )
										}
									/>
									<ToggleControl
										className="my-custom-troggle"
										label={ __(
											'Mark As No Follow',
											'icon-picker'
										) }
										checked={ attributes?.noFollow }
										onChange={ ( value ) =>
											setAttributes( { noFollow: value } )
										}
									/>
									<URLInput
										className="custom-link-relation"
										label="Custom Link Relation"
										value={ attributes?.url }
										onChange={ ( nextUrl ) =>
											setAttributes( { url: nextUrl } )
										}
									/>
									<p className="extra-text">
										Enter one or more link Relations (e.g.,
										nofollow noopener sponsored), separated
										by spaces.
									</p>
								</div>
							</Popover>
						) }
					</div>

					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Icon Size', 'icon-list' ) }
						value={ attributes?.iconSize }
						onChange={ ( value ) =>
							setAttributes( { iconSize: value } )
						}
						min={ 20 }
						max={ 400 }
					/>
				</>
			);
		}

		if ( tab.name === 'styles' ) {
			return (
				<>
					<ChildItemStyle
						attributes={ attributes }
						setAttributes={ setAttributes }
						resetIcon={ resetIcon }
						type="iconPicker"
					/>
				</>
			);
		}

		return null;
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Icon Settings', 'icon-picker' ) }
					className="panel-body-container"
				>
					<TabPanel
						className="my-custom-tabs"
						activeClass="is-active"
						tabs={ [
							{
								name: 'settings',
								title: (
									<>
										<img
											src={ settingsIcon }
											width={ 16 }
											height={ 16 }
											alt="Settings"
										/>
										{ __( 'Settings', 'icon-list' ) }
									</>
								),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: (
									<>
										<img
											src={ paletteIcon }
											width={ 16 }
											height={ 16 }
											alt="Palette"
										/>
										{ __( 'Style', 'icon-list' ) }
									</>
								),
								className: 'tab-styles',
							},
						] }
					>
						{ renderTabContent }
					</TabPanel>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ attributes.iconType === 'upload' ? (
					<img src={ attributes.mediaUrl } alt="Icon" />
				) : (
					<span
						className={ `dashicons dashicons-${ attributes.selectedIcon }` }
					/>
				) }
			</div>
		</>
	);
}
