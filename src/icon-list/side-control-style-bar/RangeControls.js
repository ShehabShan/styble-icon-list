import {
	RangeControl,
	Flex,
	FlexItem,
	Button,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import './RangeControls.scss';

import BorderIcon from '../../assests/border.svg';
import UnionIcon from '../../assests/Union.svg';
import ResetIcon from '../../assests/reset.svg';

const RangeControls = ( { setAttributes, attributes, title, isPadding } ) => {
	const [ isToggled, setIsToggled ] = useState( false );

	const handleToggle = () => {
		setIsToggled( ! isToggled );
	};

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
		if ( isPadding ) {
			setAttributes( { padding: 0 } );
		}
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
					<Button>
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
						value={ attributes?.padding }
						onChange={ ( value ) =>
							setAttributes( { padding: value } )
						}
						withInputField={ isToggled }
						min={ 5 }
						max={ 50 }
						step={ 5 }
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
	);
};

export default RangeControls;
