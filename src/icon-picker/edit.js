import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';
import * as LucideIcons from 'lucide-react';
import {
	RangeControl,
	PanelBody,
	Button,
	Popover,
	TabPanel,
	ToggleControl,
} from '@wordpress/components';
import UploadIcon from '../icon-list/side-control-bar/uploadIcon.js';
import { useEffect, useState } from '@wordpress/element';

import { getBlockStyles } from '../utils/style.js';
import editIcon from '../assests/edit-icon.svg';
import resetIcon from '../assests/reset.svg';
import { Palette, Settings } from 'lucide-react';
import ChildItemStyle from '../icon-list-item/ChildItemStyle.js';
import { useGrandparentAttributes } from '../hooks/useGrandparentAttributes.js';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { iconType, iconUrl, iconSize } = attributes;

	const { selectedIcon: globalIcon } = useGrandparentAttributes( clientId );

	useEffect( () => {
		if ( globalIcon ) {
			setAttributes( { globalIcon } );
		}
	}, [ globalIcon ] );

	const iconName = attributes?.selectedIcon || globalIcon || 'ActivitySquare';

	const SelectedIcon = LucideIcons[ iconName ] || LucideIcons.ActivitySquare;

	const [ openModalId, setOpenModalId ] = useState( null );
	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};
	const isModalOpen = ( id ) => openModalId === id;
	const closeAllModals = () => setOpenModalId( null );

	const iconPickerStyle = getBlockStyles( attributes );

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
						value={ iconSize }
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
										<Settings size={ 16 } />
										{ __( 'Settings', 'icon-list' ) }
									</>
								),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: (
									<>
										<Palette size={ 16 } />
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
					SelectedIcon && <SelectedIcon />
				) }
			</div>
		</>
	);
}
