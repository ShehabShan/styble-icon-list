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

	const baseKey = type;

	const topKey = `${ type }Top`;
	const rightKey = `${ type }Right`;
	const bottomKey = `${ type }Bottom`;
	const leftKey = `${ type }Left`;

	const baseValue = attributes[ baseKey ];
	const topValue = attributes[ topKey ];
	const rightValue = attributes[ rightKey ];
	const bottomValue = attributes[ bottomKey ];
	const leftValue = attributes[ leftKey ];

	const marks = [
		{ value: 5, label: '' },
		{ value: 10, label: '' },
		{ value: 15, label: '' },
		{ value: 20, label: '' },
		{ value: 25, label: '' },
		{ value: 30, label: '' },
		{ value: 35, label: '' },
		{ value: 40, label: '' },
		{ value: 45, label: '' },
		{ value: 50, label: '' },
	];

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
						// value={ attributes.padding }
						// onChange={ ( nextValue ) =>
						// 	setAttributes( { padding: nextValue } )
						// }
						units={ [
							{ value: 'px', label: 'px', default: 0 },
							{ value: '%', label: '%', default: 0 },
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
							min={ 0 }
							max={ props?.isBorder ? 7 : 50 }
							step={ props?.isBorder ? 1 : 5 }
							marks={ marks }
							hideLabelFromVision // Keeps label for accessibility but hides it visually
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
								min={ 0 }
								max={ props?.isBorder ? 7 : 50 }
								step={ props?.isBorder ? 1 : 5 }
								marks={ marks }
								hideLabelFromVision // Keeps label for accessibility but hides it visually
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
								min={ 0 }
								max={ props?.isBorder ? 7 : 50 }
								step={ props?.isBorder ? 1 : 5 }
								marks={ marks }
								hideLabelFromVision // Keeps label for accessibility but hides it visually
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
								min={ 0 }
								max={ props?.isBorder ? 7 : 50 }
								step={ props?.isBorder ? 1 : 5 }
								marks={ marks }
								hideLabelFromVision // Keeps label for accessibility but hides it visually
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
								min={ 0 }
								max={ props?.isBorder ? 7 : 50 }
								step={ props?.isBorder ? 1 : 5 }
								marks={ marks }
								hideLabelFromVision // Keeps label for accessibility but hides it visually
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
