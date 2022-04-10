import './DiamondPerfScale.component.css';
import React from 'react';
import SVGXAxis from './SVGs/PerfXAxis.svg';

const perfLabels = Object.freeze(["P", "F", "G", "VG", "EX", "OU"]);

function DiamondPerfScale(props) {
	if (props.diamondScores) {
		return renderDiamondPerfScale();
	} else {
		return renderNoDiamondPerfScale();
	}

	function renderNoDiamondPerfScale() {
		return (<></>);
	}

	function renderDiamondPerfScale(scores = props.diamondScores) {
		const perfActiveRange = getPerfActiveRange();
		const perfActiveLabels = getPerfActiveLabels();
		return (
			<div className="diamond-perf-scale">
				<div className="active-range" style={perfActiveRange}></div>
				<div className="x-axis">
					<div className="labels">
						{
							perfLabels.map(label => {
								return (<span key={label} className={`label${perfActiveLabels.includes(label) ? " active" : ""}`}>{label}</span>);
							})
						}
					</div>
					<div className="scale">
						<SVGXAxis />
					</div>
				</div>
			</div>
		);

		function getPerfActiveRange() {
			if (scores && scores.integral && !isNaN(scores.integral.val) && !isNaN(scores.integral.d)) {
				const width = (scores.integral.d * 200);
				return {
					width: width + "%",
					left: (scores.integral.rg * 100) - width + "%",
				};
			}
			return {};
		}

		/** @returns {[String]} */
		function getPerfActiveLabels() {
			if (scores && scores.integral && Array.isArray(scores.integral.ag)) {
				return scores.integral.ag;
			}
			return [];
		}
	}
}

export default DiamondPerfScale;