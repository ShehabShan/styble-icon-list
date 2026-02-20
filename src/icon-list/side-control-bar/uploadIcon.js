import { Button, Popover } from '@wordpress/components';

import './side-bar-scss/uploadIcon.scss';

import { iconLibrary } from '../../utils/dataCenter.js';

const UploadIcon = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	attributes,
	setAttributes,
} ) => {
	const { selectedIcon } = attributes;
	const SelectedIconComponent = selectedIcon
		? iconLibrary.find( ( item ) => item.name === selectedIcon )?.icon
		: null;
	return (
		<div
			className="icon-sidebar-container"
			style={ { position: 'relative' } }
		>
			<div className="icon-sidebar-container-image-box">
				{ SelectedIconComponent && (
					<SelectedIconComponent size={ 30 } />
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
					onClose={ () => closeAllModals }
					placement="bottom-start"
					offset={ 10 }
				>
					<div className="icon-library-grid">
						{ iconLibrary.map( ( item ) => {
							const IconComponent = item.icon;
							const isActive = attributes.icon === item.name;

							return (
								<Button
									key={ item.name }
									className={ `icon-library-item ${
										isActive ? 'is-active' : ''
									}` }
									onClick={ () => {
										setAttributes( {
											selectedIcon: item.name,
										} );
									} }
								>
									<IconComponent size={ 20 } />
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
