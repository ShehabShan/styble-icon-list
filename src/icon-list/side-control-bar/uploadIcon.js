import { Button, Popover } from '@wordpress/components';

import './side-bar-scss/uploadIcon.scss';

import { iconLibrary } from '../../utils/dataCenter.js';

const UploadIcon = ( {
	isLibaryOpen,
	toggleLibaryOpen,
	isCustomIconOpen,
	toggleCustomIcon,
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
					onClick={ toggleLibaryOpen }
				>
					Libary
				</Button>

				<Button
					variant="secondary"
					className="component-button-for-icon"
					onClick={ toggleCustomIcon }
				>
					Custom
				</Button>
			</div>

			{ isLibaryOpen && (
				<Popover
					onClose={ () => toggleLibaryOpen( false ) }
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
										toggleLibaryOpen();
									} }
								>
									<IconComponent size={ 20 } />
								</Button>
							);
						} ) }
					</div>
				</Popover>
			) }

			{ isCustomIconOpen && (
				<Popover
					onClose={ () => toggleCustomIcon( false ) }
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
						<Button
							variant="tertiary"
							onClick={ () => toggleCustomIcon() }
						>
							Close
						</Button>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default UploadIcon;
