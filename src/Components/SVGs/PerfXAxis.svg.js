import React from 'react';

const SVGStar = (props) => {
	return (
		<svg version="1.1" viewBox="0 0 512 26" xmlns="http://www.w3.org/2000/svg" {...props}>
			<defs>
				<linearGradient id="linear-gradient-scale" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop stopColor="#ff4848" offset="0" />
					<stop stopColor="#e78f6e" offset=".2" />
					<stop stopColor="#d4af7f" offset=".4" />
					<stop stopColor="#43cd7a" offset="1" />
				</linearGradient>
			</defs>
			<path d="m2.181 20.72h75.842v-16.365c0.79366-5.8071 8.9948-5.8071 9.7884 0l1e-6 16.365h75.249v-16.365c0.79366-5.8071 8.9948-5.8071 9.7884 0v16.365h76.636v-16.365c0.79367-5.8071 8.9948-5.8071 9.7884 1e-5v16.365h73.514v-16.365c0.79367-5.8071 8.9948-5.8071 9.7884 0v16.365h78.308v-16.343c0.79367-5.8071 8.9948-5.8071 9.7884 0v16.343h78.657c3.5589 0.10712 3.5628 5.1059 0 5.2792h-507.15c-2.91-0.52792-2.91-4.7513 0-5.2792z" fill="url(#linear-gradient-scale)" />
		</svg>
	);
}

export default SVGStar;
