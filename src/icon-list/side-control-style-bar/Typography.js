import {
	Popover,
	RangeControl,
	SelectControl,
	TextControl,
	Button,
	__experimentalHStack as HStack,
} from '@wordpress/components';

import { Italic, Underline, Strikethrough } from 'lucide-react';
import { __ } from '@wordpress/i18n';

import './typography.scss';
import { fontOptions } from '../../utils/dataCenter';
import CustomHelperComponent from '../side-control-bar/CustomHelperComponent';
const Typography = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	attributes,
	setAttributes,
} ) => {
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
					onClose={ () => closeAllModals }
					placement="left-start" // Left-start usually matches the sidebar flyout better
					offset={ 15 }
				>
					<div className="typography-popover-container">
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
						<CustomHelperComponent
							label={ __( 'Font Size', 'icon-list' ) }
							hasText={ true }
							text={
								__( 'px', 'icon-list' ) // You can change this to 'em' or '%' based on your needs
							}
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
						<CustomHelperComponent
							label={ __( 'Font Height', 'icon-list' ) }
							hasText={ true }
							text={
								__( 'px', 'icon-list' ) // You can change this to 'em' or '%' based on your needs
							}
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

						<div className="typography-spacing-controls">
							<div>
								<CustomHelperComponent
									label={ __(
										'Letter Spacing',
										'icon-list'
									) }
									hasText={ true }
									text={ __( 'px', 'icon-list' ) }
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
							<div>
								<CustomHelperComponent
									label={ __( 'Word Spacing', 'icon-list' ) }
									hasText={ true }
									text={ __( 'px', 'icon-list' ) }
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
								<Italic size={ 16 } strokeWidth={ 2.5 } />
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
								<Underline size={ 16 } strokeWidth={ 2.5 } />
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
								<Strikethrough
									size={ 16 }
									strokeWidth={ 2.5 }
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

							{ /* ... Add lowercase (ab) and capitalize (Ab) buttons similarly */ }
						</HStack>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default Typography;
