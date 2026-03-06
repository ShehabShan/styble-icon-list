import {
	RangeControl,
	Flex,
	FlexItem,
	Button,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { useState } from '@wordpress/element';

import './RangeControls.scss';

import BorderIcon from '../../assests/border.svg';
import UnionIcon from '../../assests/Union.svg';
import ResetIcon from '../../assests/reset.svg';
import topIcon from '../../assests/sides-top.svg';
import rightIcon from '../../assests/sides-right.svg';
import bottomIcon from '../../assests/sides-bottom.svg';
import leftIcon from '../../assests/sides-left.svg';

const RangeControls = ( props ) => {
	const { setAttributes, attributes, title, type } = props;

	const [ isToggled, setIsToggled ] = useState( false );
	const [ isExpanded, setIsExpanded ] = useState( false );

	const handleToggle = () => {
		setIsToggled( ! isToggled );
	};

	const handleExpand = () => {
		setIsExpanded( ( prev ) => ! prev );
	};

	const unitKey = `${ type }Units`;

	const baseKey = type;
	const topKey = `${ type }Top`;
	const rightKey = `${ type }Right`;
	const bottomKey = `${ type }Bottom`;
	const leftKey = `${ type }Left`;

	// 1. Get the "Master" value
	const baseValue = attributes[ baseKey ] ?? 0;

	// 2. Get the side values, falling back to the Master value if they are undefined
	const topValue = attributes[ topKey ] ?? baseValue;
	const rightValue = attributes[ rightKey ] ?? baseValue;
	const bottomValue = attributes[ bottomKey ] ?? baseValue;
	const leftValue = attributes[ leftKey ] ?? baseValue;

	const activeUnit = attributes[ unitKey ]?.replace( /[0-9.]/g, '' ) || 'px';

	const cap = ( str ) => str.charAt( 0 ).toUpperCase() + str.slice( 1 );

	const updateValue = ( key, val ) => {
		setAttributes( {
			[ key ]: val,
			[ `hover${ cap( key ) }` ]: val,
		} );
	};

	const resetAllValue = () => {
		const sides = [ 'Top', 'Right', 'Bottom', 'Left' ];

		const resetObj = {
			[ type ]: 0,
			[ `hover${ cap( type ) }` ]: 0,
		};

		sides.forEach( ( side ) => {
			const key = `${ type }${ side }`;

			resetObj[ key ] = null;
			resetObj[ `hover${ cap( key ) }` ] = null;
		} );

		setAttributes( resetObj );
	};

	const unitSettings = {
		px: {
			min: 0,
			max: props?.isBorder ? 10 : 100,
			step: 1,

			marks: props?.isBorder
				? [
						{ value: 1, label: '1' },
						{ value: 3, label: '3' },
						{ value: 5, label: '5' },
						{ value: 7, label: '7' },
						{ value: 9, label: '9' },
						{ value: 10, label: '10' },
				  ]
				: [
						{ value: 0, label: '0' },
						{ value: 15, label: '' },
						{ value: 30, label: '30' },
						{ value: 45, label: '' },
						{ value: 60, label: '60' },
						{ value: 75, label: '' },
						{ value: 90, label: '' },
						{ value: 100, label: '100' },
				  ],
		},
		em: {
			min: 0,
			max: 5,
			step: 0.1, // em needs decimal steps to be useful
			marks: [
				{ value: 0, label: '0' },
				{ value: 1, label: '1' },
				{ value: 2, label: '2' },
				{ value: 3, label: '3' },
				{ value: 4, label: '4' },
				{ value: 5, label: '5' },
			],
		},
	};

	const currentConfig = unitSettings[ activeUnit ] || unitSettings.px;

	return (
		<div className="range-row">
			<div className="range-title-bar">
				<p>{ title }</p>
				<div>
					<Button onClick={ resetAllValue }>
						<img
							src={ ResetIcon }
							alt="Reset Button"
							style={ {
								width: '16px',
								height: '16px',
							} }
						/>
					</Button>
					<Button onClick={ () => handleExpand() }>
						<img
							src={ BorderIcon }
							alt="All Border Button"
							style={ {
								width: '16px',
								height: '16px',
							} }
						/>
					</Button>
					<UnitControl
						value={ attributes[ unitKey ] }
						onChange={ ( nextValue ) => {
							setAttributes( { [ unitKey ]: nextValue } );
						} }
						units={ [
							{ value: 'px', label: 'px' },
							{ value: 'em', label: 'em' },
						] }
					/>
				</div>
			</div>

			{ ! isExpanded && (
				<Flex align="center" gap={ 3 }>
					<FlexItem>
						<img
							src={ BorderIcon }
							alt="Border"
							style={ {
								width: '16px',
								height: '16px',
							} }
						/>
					</FlexItem>

					<FlexItem isBlock>
						<RangeControl
							value={ baseValue }
							onChange={ ( value ) => {
								const updateObj = {
									[ baseKey ]: value,
									[ `hover${ cap( baseKey ) }` ]: value,
								};

								[ 'Top', 'Right', 'Bottom', 'Left' ].forEach(
									( side ) => {
										const sideKey = `${ type }${ side }`;
										updateObj[ sideKey ] = undefined;
										updateObj[
											`hover${ cap( sideKey ) }`
										] = undefined;
									}
								);

								setAttributes( updateObj );
							} }
							withInputField={ isToggled }
							// Use the dynamic config here:
							min={ currentConfig.min }
							max={ currentConfig.max }
							step={ currentConfig.step }
							marks={ currentConfig.marks }
							hideLabelFromVision
						/>
					</FlexItem>

					<FlexItem>
						<Button
							variant="secondary"
							className="custom-toggle-button"
							onClick={ handleToggle }
						>
							<img
								src={ UnionIcon }
								alt="Toggle"
								style={ { width: '16px' } }
							/>
						</Button>
					</FlexItem>
				</Flex>
			) }

			{ isExpanded && (
				<div>
					<Flex align="center" gap={ 3 }>
						<FlexItem>
							<img
								src={ topIcon }
								alt="Border"
								style={ {
									width: '24px',
									height: '24px',
								} }
							/>
						</FlexItem>

						<FlexItem isBlock>
							<RangeControl
								value={ topValue }
								onChange={ ( value ) =>
									updateValue( topKey, value )
								}
								withInputField={ isToggled }
								// Use the dynamic config here:
								min={ currentConfig.min }
								max={ currentConfig.max }
								step={ currentConfig.step }
								marks={ currentConfig.marks }
								hideLabelFromVision
							/>
						</FlexItem>

						<FlexItem>
							<Button
								variant="secondary"
								className="custom-toggle-button"
								onClick={ handleToggle }
							>
								<img
									src={ UnionIcon }
									alt="Toggle"
									style={ { width: '16px' } }
								/>
							</Button>
						</FlexItem>
					</Flex>
					<Flex align="center" gap={ 3 }>
						<FlexItem>
							<img
								src={ rightIcon }
								alt="Border"
								style={ {
									width: '24px',
									height: '24px',
								} }
							/>
						</FlexItem>

						<FlexItem isBlock>
							<RangeControl
								value={ rightValue }
								onChange={ ( value ) =>
									updateValue( rightKey, value )
								}
								withInputField={ isToggled }
								// Use the dynamic config here:
								min={ currentConfig.min }
								max={ currentConfig.max }
								step={ currentConfig.step }
								marks={ currentConfig.marks }
								hideLabelFromVision
							/>
						</FlexItem>

						<FlexItem>
							<Button
								variant="secondary"
								className="custom-toggle-button"
								onClick={ handleToggle }
							>
								<img
									src={ UnionIcon }
									alt="Toggle"
									style={ { width: '16px' } }
								/>
							</Button>
						</FlexItem>
					</Flex>
					<Flex align="center" gap={ 3 }>
						<FlexItem>
							<img
								src={ bottomIcon }
								alt="Border"
								style={ {
									width: '24px',
									height: '24px',
								} }
							/>
						</FlexItem>

						<FlexItem isBlock>
							<RangeControl
								value={ bottomValue }
								onChange={ ( value ) =>
									updateValue( bottomKey, value )
								}
								withInputField={ isToggled }
								// Use the dynamic config here:
								min={ currentConfig.min }
								max={ currentConfig.max }
								step={ currentConfig.step }
								marks={ currentConfig.marks }
								hideLabelFromVision
							/>
						</FlexItem>

						<FlexItem>
							<Button
								variant="secondary"
								className="custom-toggle-button"
								onClick={ handleToggle }
							>
								<img
									src={ UnionIcon }
									alt="Toggle"
									style={ { width: '16px' } }
								/>
							</Button>
						</FlexItem>
					</Flex>
					<Flex align="center" gap={ 3 }>
						<FlexItem>
							<img
								src={ leftIcon }
								alt="Border"
								style={ {
									width: '24px',
									height: '24px',
								} }
							/>
						</FlexItem>

						<FlexItem isBlock>
							<RangeControl
								value={ leftValue }
								onChange={ ( value ) =>
									updateValue( leftKey, value )
								}
								withInputField={ isToggled }
								// Use the dynamic config here:
								min={ currentConfig.min }
								max={ currentConfig.max }
								step={ currentConfig.step }
								marks={ currentConfig.marks }
								hideLabelFromVision
							/>
						</FlexItem>

						<FlexItem>
							<Button
								variant="secondary"
								className="custom-toggle-button"
								onClick={ handleToggle }
							>
								<img
									src={ UnionIcon }
									alt="Toggle"
									style={ { width: '16px' } }
								/>
							</Button>
						</FlexItem>
					</Flex>
				</div>
			) }
		</div>
	);
};

export default RangeControls;
