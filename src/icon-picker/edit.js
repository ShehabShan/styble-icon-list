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
import { useEffect, useState } from '@wordpress/element';

import { getChildBlockStyles } from '../utils/style.js';
import editIcon from '../assests/edit-icon.svg';
import resetIcon from '../assests/reset.svg';
import settingsIcon from '../assests/setting.svg';
import paletteIcon from '../assests/palette.svg';

import { useGrandparentAttributes } from '../hooks/useGrandparentAttributes.js';
import ChildItemStyle from '../icon-list-item/ChildItemStyle.js';

export default function Edit( { attributes, setAttributes, clientId } ) {
	console.log(
		'border',
		attributes?.childBorder,
		attributes?.childBorderTop
	);

	console.log(
		'hoverChildBorder',
		attributes?.hoverChildBorder,
		attributes?.hoverChildBorderTop
	);

	const { iconStyle } = useGrandparentAttributes( clientId );

	const selectedIcon = attributes?.selectedIcon || iconStyle?.selectedIcon;

	const mediaUrl = attributes?.mediaUrl || iconStyle?.mediaUrl;

	const iconType = attributes?.iconType || iconStyle?.iconType;

	useEffect( () => {
		if ( iconStyle ) {
			setAttributes( {
				globalSelectedIcon: iconStyle?.selectedIcon,
				globalMediaUrl: iconStyle?.mediaUrl,
				globalIconType: iconStyle?.iconType,
			} );
		}
	}, [ iconType ] );

	const [ openModalId, setOpenModalId ] = useState( null );
	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};
	const isModalOpen = ( id ) => openModalId === id;
	const closeAllModals = () => setOpenModalId( null );

	const iconPickerStyle = getChildBlockStyles( attributes );

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
							onClick={ () => toggleModal( 'link' ) }
						/>

						{ isModalOpen( 'link' ) && (
							<Popover
								onClose={ closeAllModals }
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
						max={ 200 }
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

	const renderIcon = () => {
		if ( iconType === 'upload' && mediaUrl ) {
			return <img src={ mediaUrl } alt="" />;
		}

		// Render Dashicon if iconName exists
		if ( iconType === 'library' ) {
			return (
				<span className={ `dashicons dashicons-${ selectedIcon }` } />
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
											width={ 24 }
											height={ 24 }
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

			{ /* <div { ...blockProps }>
				{ attributes.iconType === 'upload' ? (
					<img src={ attributes?.mediaUrl } alt="Icon" />
				) : (
					<span
						className={ `dashicons dashicons-${ attributes?.selectedIcon }` }
					/>
				) }
			</div> */ }

			<div { ...blockProps }>
				{ attributes?.url ? (
					<a
						href={ attributes?.url }
						target={ attributes?.newTab ? '_blank' : undefined }
						rel={
							attributes?.newTab
								? 'noopener noreferrer'
								: undefined
						}
					>
						{ renderIcon() }
					</a>
				) : (
					renderIcon()
				) }
			</div>
		</>
	);
}
