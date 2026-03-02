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
	const baseKey = type; // "borderRadius"
	const topKey = `${ type }Top`; // "borderRadiusTop"
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

	const unitSettings = {
		px: {
			min: 0,
			max: props?.isBorder ? 10 : 100,
			step: 1,
			marks: [
				{ value: 0, label: '0' },
				{ value: 25, label: '' },
				{ value: 50, label: '50' },
				{ value: 75, label: '' },
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

	const resetAllValue = () => {
		setAttributes( {
			[ baseKey ]: 0,
			[ topKey ]: undefined,
			[ rightKey ]: undefined,
			[ bottomKey ]: undefined,
			[ leftKey ]: undefined,
		} );
	};

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
							onChange={ ( value ) =>
								setAttributes( {
									[ baseKey ]: value,
									[ topKey ]: undefined,
									[ rightKey ]: undefined,
									[ bottomKey ]: undefined,
									[ leftKey ]: undefined,
								} )
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
			) }

			{ isExpanded && (
				<div>
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
								value={ topValue }
								onChange={ ( value ) =>
									setAttributes( { [ topKey ]: value } )
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
								value={ rightValue }
								onChange={ ( value ) =>
									setAttributes( { [ rightKey ]: value } )
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
								value={ bottomValue }
								onChange={ ( value ) =>
									setAttributes( { [ bottomKey ]: value } )
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
								value={ leftValue }
								onChange={ ( value ) =>
									setAttributes( { [ leftKey ]: value } )
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
