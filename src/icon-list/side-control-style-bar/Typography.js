import {
	Popover,
	RangeControl,
	SelectControl,
	TextControl,
	Button,
	__experimentalHStack as HStack,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import italic from '../../assests/italic.svg';
import underline from '../../assests/underline.svg';
import strikethrough from '../../assests/strikethrough.svg';

import { __ } from '@wordpress/i18n';

import './typography.scss';
import { fontOptions } from '../../utils/dataCenter';
import CustomHelperComponent from '../side-control-bar/CustomHelperComponent';
import { useState } from '@wordpress/element';
const Typography = ( { attributes, setAttributes } ) => {
	const {
		fontFamily,
		fontSize,
		fontWeight,
		fontHeight,
		letterSpacing,
		wordSpacing,
		isItalic,
		isUnderline,
		isStrikethrough,
		textTransform,
	} = attributes;

	const [ openModalId, setOpenModalId ] = useState( null );

	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};

	// Helper to check if a specific modal is open
	const isModalOpen = ( id ) => openModalId === id;

	const closeAllModals = () => setOpenModalId( null );

	return (
		<div>
			<CustomHelperComponent
				label={ __( 'Typography', 'icon-list' ) }
				hasText={ true }
				text={ __( 'Ab', 'icon-list' ) }
				toggleModal={ toggleModal }
			/>

			{ isModalOpen( 'Typography' ) && (
				<Popover
					onClose={ closeAllModals }
					placement="bottom"
					offset={ 15 }
				>
					<div
						className="typography-popover-container"
						onMouseLeave={ closeAllModals }
					>
						<div className="typography-popover-selected-options">
							<SelectControl
								label={ __( 'Font Family', 'icon-list' ) }
								value={ fontFamily }
								options={ fontOptions }
								onChange={ ( newFontFamily ) =>
									setAttributes( {
										fontFamily: newFontFamily,
									} )
								}
								__next40pxDefaultSize
							/>
							<SelectControl
								label={ __( 'Font Weight', 'icon-list' ) }
								value={ fontWeight }
								options={ [
									{ label: 'Regular 400', value: '400' },
									{ label: 'Medium 500', value: '500' },
									{ label: 'Semi-Bold 600', value: '600' },
									{ label: 'Bold 700', value: '700' },
									{ label: 'Extra-Bold 800', value: '800' },
								] }
								onChange={ ( value ) =>
									setAttributes( {
										fontWeight: value,
									} )
								}
								__next40pxDefaultSize
							/>
						</div>

						<div className="unit-control-container">
							<UnitControl
								value={ attributes.fontSizeUnits }
								onChange={ ( nextValue ) =>
									setAttributes( {
										fontSizeUnits: nextValue,
									} )
								}
								units={ [ { value: 'px', label: 'px' } ] }
							/>
							<RangeControl
								label={ __( 'Font Size', 'icon-list' ) }
								value={ fontSize }
								onChange={ ( value ) =>
									setAttributes( {
										fontSize: value,
									} )
								}
								min={ 10 }
								max={ 60 }
							/>
						</div>

						<div className="unit-control-container">
							<UnitControl
								value={ attributes.fontHeightUnits }
								onChange={ ( nextValue ) =>
									setAttributes( {
										fontHeightUnits: nextValue,
									} )
								}
								units={ [ { value: 'em', label: 'em' } ] }
							/>
							<RangeControl
								label={ __( 'Font Height', 'icon-list' ) }
								value={ fontHeight }
								onChange={ ( value ) =>
									setAttributes( { fontHeight: value } )
								}
								min={ 0.5 }
								max={ 3 }
								step={ 0.1 }
							/>
						</div>

						<div className="typography-spacing-controls">
							<div className="unit-control-container">
								<UnitControl
									value={ attributes.letterSpacingUnits }
									onChange={ ( nextValue ) =>
										setAttributes( {
											letterSpacingUnits: nextValue,
										} )
									}
									units={ [ { value: 'em', label: 'em' } ] }
								/>
								<TextControl
									type="number"
									value={ letterSpacing }
									onChange={ ( value ) =>
										setAttributes( {
											letterSpacing: value,
										} )
									}
									autoComplete="off"
									step="0.5"
									max={ 10 }
								/>
							</div>
							<div className="unit-control-container">
								<UnitControl
									value={ attributes.wordSpacingUnits }
									onChange={ ( nextValue ) =>
										setAttributes( {
											wordSpacingUnits: nextValue,
										} )
									}
									units={ [
										{ value: 'px', label: 'px' },
										{ value: 'em', label: 'em' },
									] }
								/>
								<TextControl
									type="number"
									value={ wordSpacing }
									onChange={ ( value ) =>
										setAttributes( {
											wordSpacing: value,
										} )
									}
									autoComplete="off"
									step="0.2"
									max={ 3 }
								/>
							</div>
						</div>
						<HStack
							className="segmented-control-container"
							spacing={ 0 } // Ensures buttons touch each other
							justify="stretch"
						>
							{ /* 1. Italic Toggle */ }
							<Button
								isPressed={ isItalic }
								onClick={ () =>
									setAttributes( {
										isItalic: ! isItalic,
									} )
								}
								className="segment-button"
							>
								<img
									src={ italic }
									alt="Italic"
									width={ 16 }
									height={ 16 }
								/>
							</Button>

							{ /* 2. Underline Toggle */ }
							<Button
								isPressed={ isUnderline }
								onClick={ () =>
									setAttributes( {
										isUnderline: ! isUnderline,
									} )
								}
								className="segment-button"
							>
								<img
									src={ underline }
									alt="Underline"
									width={ 16 }
									height={ 16 }
								/>
							</Button>

							{ /* 3. Strikethrough Toggle */ }
							<Button
								isPressed={ isStrikethrough }
								onClick={ () =>
									setAttributes( {
										isStrikethrough: ! isStrikethrough,
									} )
								}
								className="segment-button"
							>
								<img
									src={ strikethrough }
									alt="Strikethrough"
									width={ 16 }
									height={ 16 }
								/>
							</Button>

							{ /* 4. Uppercase (Single Choice Logic) */ }
							<Button
								isPressed={
									attributes.textTransform === 'uppercase'
								}
								onClick={ () =>
									setAttributes( {
										textTransform:
											textTransform === 'uppercase'
												? 'none'
												: 'uppercase',
									} )
								}
								className="segment-button text-label"
							>
								AB
							</Button>

							{ /* You can add lowercase (ab) and capitalize (Ab) similarly */ }
						</HStack>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default Typography;
