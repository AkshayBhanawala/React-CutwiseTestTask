import './Diamonds.component.css';
import React from 'react';
import SVGLoading from './SVGs/Loading.svg';
import DiamondRating from './DiamondRating.component';

function Diamonds(props) {
	if (props.diamonds && props.diamonds.length) {
		return renderDiamonds();
	} else {
		return renderNoDiamond();
	}

	function renderNoDiamond() {
		return (
			<div className="no-diamonds">
				<h1>Ohh no!!!</h1>
				<h3>There are no diamonds available!</h3>
			</div>
		);
	}

	function renderDiamonds() {
		return (
			<div className="diamond-list">
				{props.diamonds.map(renderDiamond)}
			</div>
		);
	}

	function renderDiamond(diamond) {
		// setDefaultValues();
		const widgetConfig = Object.freeze({
			// For autoplaying video
			preset: 43,
			autoplay: 1,

			//For still images
			// preset: 54,
			// autoplay: 0,
		});
		let info = `${getText(diamond.cutQuality, false, false)}${getText(diamond.cutShape)}${getText(diamond.carat, "ct")}${getText(diamond.color)}${getText(diamond.clarity)}${getText(diamond.carat)}${getText(diamond.carat)}${getSpreadPC(diamond.scores)}`.trim();
		if (info.endsWith(",")) {
			info = info.substring(0, info.length - 1);
		}
		const price = diamond.price ?? 12500;
		const pricePC = parseInt(price / (diamond.carat ?? 1));
		return (
			<div className="diamond-card" key={diamond.id}>
				<div className="image">
					<SVGLoading className="bg-loader" />
					<iframe className="landingMarquiseMedia" title="Cutwise Player" name="Cutwise Player" src={`https://widget.cutwise.com/video/${diamond.id}?sp=${widgetConfig.preset}&autoplay=${widgetConfig.autoplay}&autofocus=0&controls=0`} allowFullScreen="" loading="lazy" frameBorder="0"></iframe>
				</div>
				<div className="detils">
					<div className="info">{info}</div>
					<div className="prices">
						<div className="main" dangerouslySetInnerHTML={{ __html: getCurrencyStr(price) }}></div>
						<div className="per-carat" dangerouslySetInnerHTML={{ __html: getCurrencyStr(pricePC, "/ct") }}></div>
					</div>
				</div>
				{
					(diamond.scores && diamond.scores.integral && !isNaN(diamond.scores.integral.val))
						? <DiamondRating diamondScores={diamond.scores} />
						: ""
				}
			</div>
		);

		// function setDefaultValues() {
		// 	diamond.cutQuality = diamond.cutQuality ?? "EX";
		// 	diamond.cutShape = diamond.cutShape ?? "Round";
		// 	diamond.carat = diamond.carat ?? 0.93;
		// 	diamond.color = diamond.color ?? "L";
		// 	diamond.clarity = diamond.clarity ?? "SI2";
		// 	diamond.polish = diamond.polish ?? "EX";
		// 	diamond.symmetry = diamond.symmetry ?? "EX";
		// 	diamond.fluorIntensity = diamond.fluorIntensity ?? "STR";
		// }

		function getSpreadPC(scores) {
			if (scores && scores.spread && !isNaN(scores.spread.pc)) {
				return getText(scores.spread.pc, "%", false);
			}
			return "";
		}

		function getCurrencyStr(value, appendStr = "") {
			const currSymbol = "$";
			if (value) {
				const curr = String(value).split('').reverse().join('')
					.match(/.{1,3}/g)
					.map(part => `<span>${part.split('').reverse().join('')}</span>`)
					.reverse().join('');
				return `<span>${currSymbol}</span>${curr}${appendStr}`;
			}
			return "";
		}

		function getText(value, appendStr = "", appendComma = true) {
			const text = (value ? (value + (appendStr ?? "")) : "");
			return (appendComma ? (text + ", ") : text);
		}
	}
}

export default Diamonds;