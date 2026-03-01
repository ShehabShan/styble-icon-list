import { BaseControl, Button, Popover } from '@wordpress/components';

import './side-bar-scss/uploadIcon.scss';
import { extractedIcons } from '../../utils/dataCenter.js';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const UploadIcon = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	attributes,
	setAttributes,
} ) => {
	const ALLOWED_MEDIA_TYPES = [
		'image',
		'application/image',
		'image/svg+xml',
	];

	return (
		<div
			className="icon-sidebar-container"
			style={ { position: 'relative' } }
		>
			<div className="icon-sidebar-container-image-box">
				{ attributes?.selectedIcon && (
					<span
						className={ `dashicons dashicons-${ attributes.selectedIcon }` }
						style={ { fontSize: '40px', lineHeight: 1 } }
					/>
				) }
				{ attributes?.mediaUrl && (
					<img
						src={ attributes?.mediaUrl }
						alt="Custom Icon"
						style={ {
							width: '50px',
							height: '50px',
							borderRadius: '100%',
							objectFit: 'cover',
						} }
					/>
				) }
			</div>

			<div className="icon-sidebar-container-button-box">
				<Button
					className="component-button-for-icon"
					variant="secondary"
					onClick={ () => toggleModal( 'libary' ) }
				>
					Libary
				</Button>

				<Button
					variant="secondary"
					className="component-button-for-icon"
					onClick={ () => toggleModal( 'customIcon' ) }
				>
					Custom
				</Button>
			</div>

			{ isModalOpen( 'libary' ) && (
				<Popover
					onClose={ () => closeAllModals() }
					placement="bottom-start"
					offset={ 10 }
				>
					<div className="icon-library-grid">
						{ extractedIcons.map( ( item ) => {
							const isActive =
								attributes.selectedIcon === item.keyName;

							return (
								<Button
									key={ item.keyName }
									className={ `icon-library-item ${
										isActive ? 'is-active' : ''
									}` }
									onClick={ () => {
										setAttributes( {
											selectedIcon: item.keyName,
											mediaUrl: '', // Use empty string instead of undefined for better persistence
											mediaId: 0, // Always reset the ID too
											iconType: 'library',
											iconUpdateId: Date.now(),
										} );
									} }
								>
									<span
										className={ `dashicons dashicons-${ item.keyName }` }
									/>
								</Button>
							);
						} ) }
					</div>
				</Popover>
			) }

			{ isModalOpen( 'customIcon' ) && (
				<Popover
					onClose={ closeAllModals }
					placement="bottom-start"
					offset={ 10 }
					focusOnMount={ false }
					__unstableGUI={ true }
				>
					<div style={ { padding: '16px', minWidth: '240px' } }>
						{ /* Changed p tag to Button */ }
						<Button
							variant="primary"
							isPressed={ !! attributes.mediaUrl }
							onClick={ () => {
								toggleModal( 'mediaUpload' ); // Removed the extra "() =>"
							} }
							style={ {
								width: '100%',
								justifyContent: 'center',
							} }
						>
							Add picture
						</Button>
					</div>
				</Popover>
			) }

			{ isModalOpen( 'mediaUpload' ) && (
				<BaseControl
					label="Custom Icon"
					id="custom-icon-upload-button"
					help="Select an image for your custom icon."
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( {
									mediaId: media.id,
									mediaUrl: media.url,
									selectedIcon: '', // Explicitly clear the library icon
									iconType: 'upload',
									iconUpdateId: Date.now(),
								} )
							}
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ attributes?.mediaId }
							render={ ( { open } ) => (
								<div className="custom-icon-sidebar-uploader">
									<Button
										onClick={ open }
										className={
											! attributes.mediaUrl
												? 'is-placeholder'
												: 'is-preview'
										}
									>
										{ ! attributes.mediaUrl ? (
											<div className="placeholder-content">
												<span className="dashicons dashicons-upload"></span>
												<span>Open Media Library</span>
											</div>
										) : (
											<img
												src={ attributes.mediaUrl }
												alt="Selected icon"
											/>
										) }
									</Button>

									{ attributes.mediaUrl && (
										<div className="uploader-actions">
											<Button
												variant="link"
												onClick={ open }
											>
												Replace Image
											</Button>
											<Button
												variant="link"
												isDestructive
												onClick={ () =>
													setAttributes( {
														mediaId: 0,
														mediaUrl: '',
													} )
												}
											>
												Remove
											</Button>
										</div>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
				</BaseControl>
			) }
		</div>
	);
};

export default UploadIcon;
