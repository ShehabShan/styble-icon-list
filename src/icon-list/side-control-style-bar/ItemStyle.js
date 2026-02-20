import CustomHelperComponent from '../side-control-bar/CustomHelperComponent';

const ItemStyle = () => {
	return (
		<div style={ { position: 'relative' } }>
			{ /* <CustomHelperComponent
				icon={ editIcon }
				toggleModal={ toggleSeparatorModal }
				label={ __( 'Separator', 'icon-list' ) }
			/>

			{ isSeparatorModalOpen && (
				// ... imports
				<Popover
					onClose={ () => toggleSeparatorModal( false ) }
					placement="left-start" // Left-start usually matches the sidebar flyout better
					offset={ 15 }
				>
					<div className="separator-popover-container"></div>
				</Popover>
			) } */ }
		</div>
	);
};

export default ItemStyle;
