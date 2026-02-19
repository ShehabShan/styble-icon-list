import {
	Popover,
	RangeControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import CustomHelperComponent from '../side-control-bar/CustomHelperComponent';
import { __ } from '@wordpress/i18n';

import './typography.scss';
import { fontOptions } from '../../utils/dataCenter';

const Typography = ( {
	isTypographyModalOpen,
	toggleTypographyModal,
	attributes,
	setAttributes,
} ) => {
	const {
		fontFamily,
		fontSize,
		fontStyle,
		fontHeight,
		letterSpacing,
		wordSpacing,
	} = attributes;

	return (
		<div>
			<CustomHelperComponent
				label={ __( 'Typography', 'icon-list' ) }
				hasText={ true }
				text={ __( 'Ab', 'icon-list' ) }
				onClick={ toggleTypographyModal }
			/>

			{ isTypographyModalOpen && (
				<Popover
					onClose={ () => toggleTypographyModal( false ) }
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
								label={ __( 'Font Style', 'icon-list' ) }
								value={ fontStyle }
								options={ [
									{ label: 'Regular 400', value: '400' },
									{ label: 'Medium 500', value: '500' },
									{ label: 'Semi-Bold 600', value: '600' },
									{ label: 'Bold 700', value: '700' },
									{ label: 'Extra-Bold 800', value: '800' },
								] }
								onChange={ ( value ) =>
									setAttributes( {
										fontStyle: value,
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

						<div>
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
									step="0.1"
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
									step="0.1"
								/>
							</div>
						</div>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default Typography;
