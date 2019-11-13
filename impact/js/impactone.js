// Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
		// And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
		let data = [{
			cat: 'Economic Impact', name: 'Economic', value: 100,
			icon: 'img/economic.png',
			desc: `
				The overall economic impact of Typhoon Haiyan was estimated to be between $12 billion and $15 billion.
			`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 50,
			icon: 'img/economic.png',
			desc: `
				Up to 15% of GDP was affected in area of worst hit by the typhoon.
			`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 30,
			icon: 'img/economic.png',
			desc: `
				In worst-hit Leyte province, sugarcane and rice production were halted, loss of rice production was estimated to be 0.01% of annual production.
			`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 70,
			icon: 'img/economic.png',
			desc: `
				Six million workers lost their sources of income.`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 70,
			icon: 'img/economic.png',
			desc: `
				Phillipines' international commodity trade and farmers' incomes were severely affected due to damage to crop lands.`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 10,
			icon: 'img/economic.png',
			desc: `
				Fishing communities were economically affected with the storm destroying 30,000 boats and associated equipment.`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 40,
			icon: 'img/economic.png',
			desc: `
				Rice and seed stocks were squandered in the storm surges, causing a loss of $53 million.`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 60,
			icon: 'img/economic.png',
			desc: `
				Over 1/3 of farmers and fishermen lost their income, with an estimated loss of $724 million.`
		}, {
			cat: 'Economic Impact', name: 'Economic', value: 70,
			icon: 'img/economic.png',
			desc: `
				The estimated loss of rice and sugarcane industry was $325 million (0.2% of GDP).`
		}, {
			cat: 'Social Impact', name: 'Social', value: 90,
			icon: 'img/social.png',
			desc: `
				More than 6,000 people were killed by Typhoon Haiyan.
			`
		}, {
			cat: 'Social Impact', name: 'Social', value: 60,
			icon: 'img/social.png',
			desc: `
				1.9 million people were left homeless and more than 6,000,000 displaced.
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 80,
			icon: 'img/health.png',
			desc: `
				There were outbreaks of disease due to the lack of sanitation, food, water, shelter, and medication.
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 30,
			icon: 'img/health.png',
			desc: `
				An estimation of 1% to 5% of Typhoon Haiyan survivors would likely develop post-traumatic stress disorder (PTSD).
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 10,
			icon: 'img/health.png',
			desc: `
				Many victims cannot afford to pay for medication or to travel to a clinic.
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 50,
			icon: 'img/health.png',
			desc: `
				Countless survivors were forced to grieve deceased family members without professional counselling.
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 20,
			icon: 'img/health.png',
			desc: `
				Many survivors reported to health centres with unexplained physical symptoms, including dizziness, headaches and sleeping disorders.
			`
		}, {
			cat: 'Health Impact', name: 'Health', value: 40,
			icon: 'img/health.png',
			desc: `
				Many schoolchildren were unable to cope after being seperated from their parents and have difficulty concentrating in school.
			`
		}, {
			cat: 'Infrastructural Impact', name: 'Infrastructural', value: 90,
			icon: 'img/infrastructural.png',
			desc: `
				1.1 million houses were damaged.
			`
		}, {
			cat: 'Infrastructural Impact', name: 'Infrastructural', value: 70,
			icon: 'img/infrastructural.png',
			desc: `
				Tacloban's city airport was severely damaged, affecting business and tourism.
			`
		}, {
			cat: 'Infrastructural Impact', name: 'Infrastructural', value: 30,
			icon: 'img/infrastructural.png',
			desc: `
				Major roads were blocked by trees, and were impassable.
			`
		}, {
			cat: 'Infrastructural Impact', name: 'Infrastructural', value: 60,
			icon: 'img/infrastructural.png',
			desc: `
				Widespread floods damaged and in many cases destroyed homes and businesses in coastal areas.
			`
		}, {
			cat: 'Environmental Impact', name: 'Environmental', value: 80,
			icon: 'img/environmental.png',
			desc: `
				1.1 million tonnes of crops were destroyed.
			`
		}, {
			cat: 'Environmental Impact', name: 'Environmental', value: 70,
			icon: 'img/environmental.png',
			desc: `
				Major rice, corn and sugar-producing areas for the Philippines were destroyed.
			`
		}, {
			cat: 'Environmental Impact', name: 'Environmental', value: 50,
			icon: 'img/environmental.png',
			desc: `
				600,000 hectares of farmlands belonging to 1 million farmers were affected.
			`
		}, {
			cat: 'Environmental Impact', name: 'Environmental', value: 30,
			icon: 'img/environmental.png',
			desc: `
				Up to 3.5% sugarcane crop in the Phillipines has been destroyed.
			`
		}];