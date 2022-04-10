import Axios from "axios";
import APIRoutes from "../Config/APIRoutesForClient";
import CONFIG from "../Config/Config";

const testData = [
	{
		"id": 49193,
		"sku": "MSSRBC13",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.73,
		"clarity": "VS2",
		"color": "G",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-12-03T08:22:30+00:00",
		"scores": {
			"integral": {
				"val": 0.93,
				"rg": 0.99,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"spread": {
				"ct": 0,
				"pc": 0.1,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 0.72,
				"rg": 0.98,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"brilliance": {
				"val": 0.99,
				"rg": 0.99,
				"d": 0.02,
				"faceup": 0.99,
				"avg": 0.99,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"EX"
				],
				"hr": "EX"
			},
			"scintillation": null,
			"fluor": {
				"n": 1,
				"f": 0,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 7,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 9.68,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"OU"
				],
				"hr": "OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/49193"
			}
		]
	},
	{
		"id": 49192,
		"sku": "T898",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 1.01,
		"clarity": "SI2",
		"color": "L",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-12-03T08:21:10+00:00",
		"scores": {
			"integral": {
				"val": 0.95,
				"rg": 0.96,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"spread": {
				"ct": -0.03,
				"pc": -3.4,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 0.83,
				"rg": 0.85,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"brilliance": {
				"val": 0.99,
				"rg": 0.99,
				"d": 0.02,
				"faceup": 0.99,
				"avg": 0.98,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"EX"
				],
				"hr": "EX"
			},
			"scintillation": null,
			"fluor": {
				"n": 1,
				"f": 0,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 7,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 8.19,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/49192"
			}
		]
	},
	{
		"id": 48821,
		"sku": "color_grade_1",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 1.01,
		"clarity": "SI1",
		"color": "H",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T11:01:40+00:00",
		"scores": {
			"integral": {
				"val": 0.98,
				"rg": 0.98,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"VG",
					"EX",
					"OU"
				],
				"hr": "VG-OU"
			},
			"spread": {
				"ct": -0.03,
				"pc": -2.7,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 1.1,
				"rg": 1.12,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"OU"
				],
				"hr": "OU"
			},
			"brilliance": {
				"val": 0.94,
				"rg": 0.94,
				"d": 0.02,
				"faceup": 1.08,
				"avg": 1.04,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"scintillation": {
				"val": 0.85,
				"rg": 0.85,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48821/233030/ea266480-64a3-4853-b684-19338d7a413c/60b763d2a5c386.88215696.png",
				"ver": "1.2.0",
				"ag": [
					"G",
					"VG"
				],
				"hr": "G-VG"
			},
			"fluor": {
				"n": 0.7,
				"f": 0.3,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 7,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 6.75,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48821"
			}
		]
	},
	{
		"id": 48820,
		"sku": "color_grade_2",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 1.14,
		"clarity": "SI2",
		"color": "G",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T11:01:21+00:00",
		"scores": {
			"integral": {
				"val": 1.01,
				"rg": 0.99,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"spread": {
				"ct": -0.03,
				"pc": -2.5,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 1.14,
				"rg": 1.03,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"brilliance": {
				"val": 0.97,
				"rg": 0.97,
				"d": 0.02,
				"faceup": 1.05,
				"avg": 1.01,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"scintillation": {
				"val": 0.85,
				"rg": 0.81,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48820/233022/b22cd738-8839-478e-87de-974e5169a971/60b763d2a123a3.09608407.png",
				"ver": "1.2.0",
				"ag": [
					"G"
				],
				"hr": "G"
			},
			"fluor": {
				"n": 1,
				"f": 0,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 7,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 6.88,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48820"
			}
		]
	},
	{
		"id": 48819,
		"sku": "color_grade_3",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.7,
		"clarity": "VS2",
		"color": "F",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T11:01:14+00:00",
		"scores": {
			"integral": {
				"val": 0.92,
				"rg": 1,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"spread": {
				"ct": -0.03,
				"pc": -4.9,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 0.66,
				"rg": 0.98,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"brilliance": {
				"val": 1,
				"rg": 1,
				"d": 0.02,
				"faceup": 1.1,
				"avg": 1.01,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"EX"
				],
				"hr": "EX"
			},
			"scintillation": {
				"val": 1.08,
				"rg": 1.08,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48819/233023/5d88759f-cae6-4580-8699-604a7eeecabf/60b763d29e5e61.59885611.png",
				"ver": "1.2.0",
				"ag": [
					"VG"
				],
				"hr": "VG"
			},
			"fluor": {
				"n": 0.17,
				"f": 0.83,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 1,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 8.64,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"OU"
				],
				"hr": "OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48819"
			}
		]
	},
	{
		"id": 48794,
		"sku": "color_grade_4",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.7,
		"clarity": "SI2",
		"color": "K",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T09:59:54+00:00",
		"scores": {
			"integral": {
				"val": 0.9,
				"rg": 0.97,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"VG",
					"EX",
					"OU"
				],
				"hr": "VG-OU"
			},
			"spread": {
				"ct": -0.02,
				"pc": -3.5,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 0.63,
				"rg": 0.91,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"VG",
					"EX",
					"OU"
				],
				"hr": "VG-OU"
			},
			"brilliance": {
				"val": 0.99,
				"rg": 0.99,
				"d": 0.02,
				"faceup": 1.07,
				"avg": 1,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"EX"
				],
				"hr": "EX"
			},
			"scintillation": {
				"val": 0.92,
				"rg": 0.92,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48794/232821/584c3416-7a1e-41a9-a9c1-f545c575ae91/60b763e1583e28.76089271.png",
				"ver": "1.2.0",
				"ag": [
					"G",
					"VG"
				],
				"hr": "G-VG"
			},
			"fluor": {
				"n": 0,
				"f": 1,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 1,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 8.18,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48794"
			}
		]
	},
	{
		"id": 48793,
		"sku": "color_grade_5",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 1.02,
		"clarity": "SI1",
		"color": "M",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T09:59:43+00:00",
		"scores": {
			"integral": {
				"val": 0.99,
				"rg": 0.99,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"spread": {
				"ct": -0.04,
				"pc": -3.9,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 1.03,
				"rg": 1.05,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"brilliance": {
				"val": 0.97,
				"rg": 0.97,
				"d": 0.02,
				"faceup": 1.02,
				"avg": 0.96,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"VG",
					"EX"
				],
				"hr": "VG-EX"
			},
			"scintillation": {
				"val": 0.85,
				"rg": 0.85,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48793/232828/8ce9a509-aacf-4e06-93b5-f24bb7dacb0a/60b763e14a1365.89767728.png",
				"ver": "1.2.0",
				"ag": [
					"G",
					"VG"
				],
				"hr": "G-VG"
			},
			"fluor": {
				"n": 0.2,
				"f": 0.8,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 1,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 8.5,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48793"
			}
		]
	},
	{
		"id": 48791,
		"sku": "color_grade_6",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.72,
		"clarity": "SI2",
		"color": "G",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-27T09:59:39+00:00",
		"scores": {
			"integral": {
				"val": 0.92,
				"rg": 1,
				"d": 0.05,
				"ver": "1.1.0",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"spread": {
				"ct": -0.03,
				"pc": -3.7,
				"d": 0.1,
				"ver": "1.0.0"
			},
			"fire": {
				"val": 0.73,
				"rg": 1.04,
				"d": 0.1,
				"ver": "fire-2018-01-26-6525426815546393815",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"brilliance": {
				"val": 0.98,
				"rg": 0.98,
				"d": 0.02,
				"faceup": 1.1,
				"avg": 0.97,
				"ver": "5.4.2018-06-29-162326554",
				"ag": [
					"EX"
				],
				"hr": "EX"
			},
			"scintillation": {
				"val": 0.85,
				"rg": 0.85,
				"d": 0.1,
				"map": "https://d1d7qk4j7uzdqw.cloudfront.net/metrics/scintillation/48791/232823/60660ef5-0543-4109-be40-f5b42025d234/60b763e1420963.63521011.png",
				"ver": "1.2.0",
				"ag": [
					"G",
					"VG"
				],
				"hr": "G-VG"
			},
			"fluor": {
				"n": 0,
				"f": 1,
				"m": 0,
				"s": 0,
				"vs": 0,
				"color": 1,
				"ver": "5.5.2020-10-23-8759100668249152307"
			},
			"symmetry": {
				"val": 8.26,
				"d": 0.6,
				"ver": "2.13.1",
				"ag": [
					"EX",
					"OU"
				],
				"hr": "EX-OU"
			},
			"color": null
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48791"
			}
		]
	},
	{
		"id": 48725,
		"sku": "KR0075_L_0.77ct_New",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.77,
		"clarity": "VS2",
		"color": "L",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-25T13:46:18+00:00",
		"scores": {
			"integral": null,
			"spread": null,
			"fire": null,
			"brilliance": null,
			"scintillation": null,
			"fluor": null,
			"symmetry": null,
			"color": {
				"val": 10.845792054205,
				"ver": "1.0.0"
			}
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48725"
			}
		]
	},
	{
		"id": 48723,
		"sku": "KR0075_K_0.72ct_New2",
		"price": null,
		"isColored": false,
		"isLabGrown": false,
		"cutShape": "Round",
		"carat": 0.72,
		"clarity": "VS2",
		"color": "K",
		"cutQuality": null,
		"polish": null,
		"symmetry": null,
		"fluorIntensity": null,
		"fluorColor": null,
		"fancyGrade": null,
		"colorHue": null,
		"colorModifier": null,
		"culetSize": null,
		"date": "2019-11-25T13:46:11+00:00",
		"scores": {
			"integral": null,
			"spread": null,
			"fire": null,
			"brilliance": null,
			"scintillation": null,
			"fluor": null,
			"symmetry": null,
			"color": {
				"val": 9.2195301608017,
				"ver": "1.0.0"
			}
		},
		"girdle": null,
		"visibility": "full",
		"certifications": null,
		"_links": [
			{
				"rel": "page.report",
				"href": "https://cutwise.com/diamond/48723"
			}
		]
	}
];

export async function GetDiamonds(accessToken, limit = 10, offset = 0) {
	const __func_name = "Services.Diamond.GetDiamonds";
	return new Promise((resolve, reject) => {
		// No Access Token Set
		if (!accessToken) {
			reject(new Error("Access token not available"));
			return;
		}

		// Test Data
		const tdConfig = CONFIG.apiTestDataConfig;
		if (tdConfig.usage) {
			setTimeout(() => {
				if (tdConfig.mockError && Math.random() <= tdConfig.errorChances) {
					reject(new Error("TEST_DATA_ERROR"));
				} else {
					if (CONFIG.debug) console.log(__func_name, "testData:", testData);
					resolve(testData);
				}
			}, tdConfig.responseDelay);
			return;
		}

		// Actual Data Call
		Axios.get(APIRoutes.getDiamonds, {
			headers: { Authorization: `Bearer ${accessToken}` },
			params: { limit, offset }
		}).then((res) => {
			if (res && res.data && res.data.length) {
				if (CONFIG.debug) console.log(__func_name, "response:", res.data);
				resolve(res.data);
			} else {
				reject(new Error("DATA_NOT_RECEIVED"));
			}
		}).catch((err) => {
			console.error(__func_name, "error:", err);
			reject(err)
		});
	});
}

export default GetDiamonds;