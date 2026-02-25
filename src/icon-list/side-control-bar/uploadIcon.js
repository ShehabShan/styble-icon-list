import { Button, Popover } from '@wordpress/components';

import './side-bar-scss/uploadIcon.scss';

import * as LucideIcons from 'lucide-react';

const UploadIcon = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	attributes,
	setAttributes,
} ) => {
	const { selectedIcon, iconType } = attributes;

	const SelectedIconComponent = LucideIcons[ selectedIcon ] || null;

	const limitedIcons = Object.entries( LucideIcons )
		.filter( ( [ name ] ) => ! name.endsWith( 'Icon' ) )
		.slice( 0, 100 );

	const extractedIcons = limitedIcons.map( ( [ iconName, data ] ) => ( {
		keyName: iconName,
		displayName: data.displayName,
	} ) );

	return (
		<div
			className="icon-sidebar-container"
			style={ { position: 'relative' } }
		>
			{ iconType === 'library' && (
				<div className="icon-sidebar-container-image-box">
					{ SelectedIconComponent && (
						<SelectedIconComponent size={ 40 } />
					) }
				</div>
			) }

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
					onClose={ () => closeAllModals }
					placement="bottom-start"
					offset={ 10 }
				>
					<div className="icon-library-grid">
						{ extractedIcons.map( ( item ) => {
							const IconComponent = LucideIcons[ item.keyName ];
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
											iconType: 'library',
										} );
									} }
								>
									{ IconComponent && (
										<IconComponent size={ 20 } />
									) }
								</Button>
							);
						} ) }
					</div>
				</Popover>
			) }

			{ isModalOpen( 'customIcon' ) && (
				<Popover
					onClose={ () => closeAllModals }
					placement="bottom-start"
					offset={ 10 }
				>
					<div
						style={ {
							padding: '16px',
							minWidth: '200px',
						} }
					>
						<p>Custom Icon</p>
						<Button variant="tertiary">Close</Button>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default UploadIcon;
