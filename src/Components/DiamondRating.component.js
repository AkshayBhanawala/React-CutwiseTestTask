import './DiamondRating.component.css';
import React from 'react';
import SVGStar from './SVGs/Star.svg';
import SVGDiamond from './SVGs/Diamond.svg';
import DiamondPerfScale from './DiamondPerfScale.component';

function DiamondRating(props) {
	if (props.diamondScores ) {
		return renderDiamondRating();
	} else {
		return renderNoDiamondRating();
	}

	function renderNoDiamondRating() {
		return (<></>);
	}

	function renderDiamondRating(scores = props.diamondScores) {
		return (
			<div className="diamond-rating">
				<div className="diamond-stars">
					<div className="stars">
						<div className="mini"><SVGStar /></div>
						<div><SVGStar /></div>
						<div className="mini"><SVGStar /></div>
					</div>
					<div className="diamond"><SVGDiamond /></div>
				</div>
				<div className="cut-perf">{getCutPerformance()}</div>
				<DiamondPerfScale diamondScores={scores} />
			</div>
		);

		/** @returns {String} */
		function getCutPerformance() {
			if (scores && scores.integral && !isNaN(scores.integral.val)) {
				return scores.integral.val;
			}
			return "";
		}
	}
}

export default DiamondRating;