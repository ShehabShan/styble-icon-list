import './side-bar-scss/placeholder.scss';

const Placeholder = ( {
	presetOne,
	presetTwo,
	presetThree,
	insertPreset,
	blockProps,
} ) => {
	return (
		<div { ...blockProps } className="icon-list-placeholder">
			<h2 className="icon-list-title">Icon List</h2>
			<p className="icon-list-desc">
				Organized lists with icons to clearly showcase features,
				benefits, or key points.
			</p>

			<div className="icon-list-presets">
				<button
					className="preset-card"
					onClick={ () => insertPreset( 'preset-1' ) }
				>
					<img src={ presetOne } alt="Preset 1" />
				</button>

				<button
					className="preset-card"
					onClick={ () => insertPreset( 'preset-2' ) }
				>
					<img src={ presetTwo } alt="Preset 2" />
				</button>

				<button
					className="preset-card"
					onClick={ () => insertPreset( 'preset-3' ) }
				>
					<img src={ presetThree } alt="Preset 3" />
				</button>
			</div>

			<div className="icon-list-actions">
				<button className="primary-btn">Choose Preset</button>

				<button
					className="secondary-btn"
					onClick={ () => insertPreset( 'scratch' ) }
				>
					From Scratch
				</button>
			</div>
		</div>
	);
};

export default Placeholder;
