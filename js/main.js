const dropdownIcon = () => {
	const dropdown = document.createElement('span');
	dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	  <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	  <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
		  <g id="Group-4" transform="translate(1360.000000, 29.000000)">
			  <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
		  </g>
	  </g>
	  </g>
  </svg>`;
	return dropdown;
};

const countries = [
	{
		id: 1,
		name: 'Uganda',
		content: `Uganda company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Uganda Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Uganda Credit reports, Uganda Due diligence services, Uganda Litigation search/checks, Uganda Property search/checks, Uganda court records search, Uganda Adverse media search, Uganda compliance checks, Uganda Directorships Checks/search, Uganda Shareholdings Checks/search., Uganda Business and market intelligence, Uganda Risk intelligence data, Uganda Third-party enhanced due diligence, Uganda Investigative services.`,
	},
	{
		id: 2,
		name: 'Tanzania',
		content: `Tanzania company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Tanzania Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Tanzania Credit reports, Tanzania Due diligence services, Tanzania Litigation search/checks, Tanzania Property search/checks, Tanzania court records search, Tanzania Adverse media search, Tanzania compliance checks, Tanzania Directorships Checks/search, Tanzania Shareholdings Checks/search., Tanzania Business and market intelligence, Tanzania Risk intelligence data, Tanzania Third-party enhanced due diligence, Tanzania Investigative services.`,
	},
	{
		id: 3,
		name: 'Mauritius',
		content: `Mauritius company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mauritius Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mauritius Credit reports, Mauritius Due diligence services, Mauritius Litigation search/checks, Mauritius Property search/checks, Mauritius court records search, Mauritius Adverse media search, Mauritius compliance checks, Mauritius Directorships Checks/search, Mauritius Shareholdings Checks/search., Mauritius Business and market intelligence, Mauritius Risk intelligence data, Mauritius Third-party enhanced due diligence, Mauritius Investigative services.`,
	},
	{
		id: 4,
		name: 'Rwanda',
		content: `Rwanda company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Rwanda Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Rwanda Credit reports, Rwanda Due diligence services, Rwanda Litigation search/checks, Rwanda Property search/checks, Rwanda court records search, Rwanda  Adverse media search, Rwanda compliance checks, Rwanda Directorships Checks/search, Rwanda Shareholdings Checks/search., Rwanda Business and market intelligence, Rwanda Risk intelligence data, Rwanda Third-party enhanced due diligence, Rwanda Investigative services.`,
	},
	{
		id: 5,
		name: 'Ghana',
		content: `Ghana company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Ghana Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Ghana Credit reports, Ghana Due diligence services, Ghana Litigation search/checks, Ghana Property search/checks, Ghana court records search, Ghana Adverse media search, Ghana compliance checks, Ghana Directorships Checks/search, Ghana Shareholdings Checks/search., Ghana Business and market intelligence, Ghana Risk intelligence data, Ghana Third-party enhanced due diligence, Ghana Investigative services.`,
	},
	{
		id: 6,
		name: 'Nigeria',
		content: `Nigeria company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Nigeria Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Nigeria Credit reports, Nigeria Due diligence services, Nigeria Litigation search/checks, Nigeria Property search/checks, Nigeria court records search, Nigeria Adverse media search, Nigeria compliance checks, Nigeria Directorships Checks/search, Nigeria Shareholdings Checks/search., Nigeria Business and market intelligence, Nigeria Risk intelligence data, Nigeria Third-party enhanced due diligence, Nigeria Investigative services.`,
	},
	{
		id: 7,
		name: 'Botswana',
		content: `Botswana company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Botswana Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Botswana Credit reports, Botswana Due diligence services, Botswana Litigation search/checks, Botswana Property search/checks, Botswana court records search, Botswana Adverse media search, Botswana compliance checks, Botswana Directorships Checks/search, Botswana Shareholdings Checks/search., Botswana Business and market intelligence, Botswana Risk intelligence data, Botswana Third-party enhanced due diligence, Botswana Investigative services.`,
	},
	{
		id: 8,
		name: 'Lesotho',
		content: `Lesotho company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Lesotho Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Lesotho Credit reports, Lesotho Due diligence services, Lesotho Litigation search/checks, Lesotho Property search/checks, Lesotho court records search, Lesotho Adverse media search, Lesotho compliance checks, Lesotho Directorships Checks/search, Lesotho Shareholdings Checks/search., Lesotho Business and market intelligence, Lesotho Risk intelligence data, Lesotho Third-party enhanced due diligence, Lesotho Investigative services.`,
	},
	{
		id: 9,
		name: 'Mozambique',
		content: `Mozambique company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mozambique Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mozambique Credit reports, Mozambique Due diligence services, Mozambique Litigation search/checks, Mozambique Property search/checks, Mozambique court records search, Mozambique Adverse media search, Mozambique compliance checks, Mozambique Directorships Checks/search, Mozambique Shareholdings Checks/search., Mozambique Business and market intelligence, Mozambique Risk intelligence data, Mozambique Third-party enhanced due diligence, Mozambique Investigative services.`,
	},
	{
		id: 10,
		name: 'Namibia',
		content: `Namibia company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Namibia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Namibia Credit reports, Namibia Due diligence services, Namibia Litigation search/checks, Namibia Property search/checks, Namibia court records search, Namibia Adverse media search, Namibia compliance checks, Namibia Directorships Checks/search, Namibia Shareholdings Checks/search. Namibia Business and market intelligence, Namibia Risk intelligence data, Namibia Third-party enhanced due diligence, Namibia Investigative services.`,
	},
	{
		id: 11,
		name: 'South Africa',
		content: `South Africa company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		South Africa Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		South Africa Credit reports, Namibia Due diligence services, South Africa Litigation search/checks, South Africa Property search/checks, South Africa court records search, South Africa Adverse media search, South Africa compliance checks, South Africa Directorships Checks/search, South Africa Shareholdings Checks/search., South Africa Business and market intelligence, South Africa Risk intelligence data, South Africa Third-party enhanced due diligence, South Africa Investigative services.`,
	},
	{
		id: 12,
		name: 'Swaziland',
		content: `Swaziland company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Swaziland Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Swaziland Credit reports, Swaziland Due diligence services, Swaziland Litigation search/checks, Swaziland Property search/checks, Swaziland court records search, Swaziland Adverse media search, Swaziland compliance checks, Swaziland Directorships Checks/search, Swaziland Shareholdings Checks/search., Swaziland Business and market intelligence, Swaziland Risk intelligence data, Swaziland Third-party enhanced due diligence, Swaziland Investigative services.`,
	},
	{
		id: 13,
		name: 'Zambia',
		content: `Zambia company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Zambia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Zambia Credit reports, Zambia Due diligence services, Zambia Litigation search/checks, Zambia Property search/checks, Zambia court records search, Zambia Adverse media search, Zambia compliance checks, Zambia Directorships Checks/search, Zambia Shareholdings Checks/search., Zambia Business and market intelligence, Zambia Risk intelligence data, Zambia Third-party enhanced due diligence, Zambia Investigative services.`,
	},
	{
		id: 14,
		name: 'Cameroon',
		content: `Cameroon company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Cameroon Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Cameroon Credit reports, Cameroon Due diligence services, Cameroon Litigation search/checks, Cameroon Property search/checks, Cameroon court records search, Cameroon Adverse media search, Cameroon compliance checks, Cameroon Directorships Checks/search, Cameroon Shareholdings Checks/search., Cameroon Business and market intelligence, Cameroon Risk intelligence data, Cameroon Third-party enhanced due diligence, Cameroon Investigative services.`,
	},
	{
		id: 15,
		name: 'DRC Congo',
		content: `DRC Congo company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		DRC Congo Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		DRC Congo Credit reports, DRC Congo Due diligence services, DRC Congo Litigation search/checks, DRC Congo Property search/checks, DRC Congo court records search, DRC Congo Adverse media search, DRC Congo compliance checks, DRC Congo Directorships Checks/search, DRC Congo Shareholdings Checks/search., DRC Congo Business and market intelligence, DRC Congo Risk intelligence data, DRC Congo Third-party enhanced due diligence, DRC Congo Investigative services.`,
	},
	{
		id: 16,
		name: 'Seychelles & Madagascar',
		content: `Seychelles & Madagascar company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Seychelles & Madagascar Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Seychelles & Madagascar Credit reports, Seychelles & Madagascar Due diligence services, Seychelles & Madagascar Litigation search/checks, Seychelles & Madagascar Property search/checks, Seychelles & Madagascar court records search, Seychelles & Madagascar Adverse media search, Seychelles & Madagascar compliance checks, Seychelles & Madagascar Directorships Checks/search, Seychelles & Madagascar Shareholdings Checks/search., Seychelles & Madagascar Business and market intelligence, Seychelles & Madagascar Risk intelligence data, Seychelles & Madagascar Third-party enhanced due diligence, Seychelles & Madagascar Investigative services.`,
	},
	{
		id: 17,
		name: 'Malawi',
		content: `Malawi company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Malawi Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Malawi Credit reports, Malawi Due diligence services, Malawi Litigation search/checks, Malawi Property search/checks, Malawi court records search, Malawi Adverse media search, Malawi compliance checks, Malawi Directorships Checks/search, Malawi Shareholdings Checks/search., Malawi Business and market intelligence, Malawi Risk intelligence data, Malawi Third-party enhanced due diligence, Malawi Investigative services.`,
	},
	{
		id: 18,
		name: 'Zimbabwe',
		content: `Zimbabwe company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Zimbabwe Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Zimbabwe Credit reports, Zimbabwe Due diligence services, Zimbabwe Litigation search/checks, Zimbabwe Property search/checks, Zimbabwe court records search, Zimbabwe Adverse media search, Zimbabwe compliance checks, Zimbabwe Directorships Checks/search, Zimbabwe Shareholdings Checks/search., Zimbabwe Business and market intelligence, Zimbabwe Risk intelligence data, Zimbabwe Third-party enhanced due diligence, Zimbabwe Investigative services.`,
	},
	{
		id: 19,
		name: `C??te d'Ivoire's`,
		content: `C??te d???Ivoire company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		C??te d???Ivoire Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		C??te d???Ivoire Company Profile Search, C??te d???Ivoire Credit reports, C??te d???Ivoire Due diligence services, C??te d???Ivoire Litigation search/checks, C??te d???Ivoire Property search/checks, C??te d???Ivoire court records search, C??te d???Ivoire Adverse media search, C??te d???Ivoire compliance checks, C??te d???Ivoire Business and market intelligence, C??te d???Ivoire Risk intelligence data, C??te d???Ivoire Third-party enhanced due diligence, C??te d???Ivoire Investigative services.`,
	},
	{
		id: 20,
		name: `Gambia`,
		content: `Gambia company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Gambia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Gambia Company Profile Search, Gambia Credit reports, Gambia Due diligence services, Gambia Litigation search/checks, Gambia Property search/checks, Gambia court records search, Gambia Adverse media search, Gambia compliance checks, Gambia Business and market intelligence, Gambia Risk intelligence data, Gambia Third-party enhanced due diligence, Gambia Investigative services.`,
	},
	{
		id: 21,
		name: `Mali`,
		content: `Mali company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mali Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mali Company Profile Search, Mali Credit reports, Mali Due diligence services, Mali Litigation search/checks, Mali Property search/checks, Mali court records search, Mali Adverse media search, Mali compliance checks, Mali Business and market intelligence, Mali Risk intelligence data, Mali Third-party enhanced due diligence, Mali Investigative services.
		`,
	},
	{
		id: 22,
		name: `Mauritania`,
		content: `Mauritania company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mauritania Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mauritania Company Profile Search, Mauritania Credit reports, Mauritania Due diligence services, Mauritania Litigation search/checks, Mauritania Property search/checks, Mauritania court records search, Mauritania Adverse media search, Mauritania compliance checks, Mauritania Business and market intelligence, Mauritania Risk intelligence data, Mauritania Third-party enhanced due diligence, Mauritania Investigative services.`,
	},
	{
		id: 23,
		name: `Niger`,
		content: `Niger company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Niger Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Niger Company Profile Search, Niger Credit reports, Niger Due diligence services, Niger Litigation search/checks, Niger Property search/checks, Niger court records search, Niger Adverse media search, Niger compliance checks, Niger Business and market intelligence, Niger Risk intelligence data, Niger Third-party enhanced due diligence, Niger Investigative services.`,
	},
	{
		id: 24,
		name: `Sierra Leone`,
		content: `Sierra Leone company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Sierra Leone Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Sierra Leone Company Profile Search, Sierra Leone Credit reports, Sierra Leone Due diligence services, Sierra Leone Litigation search/checks, Sierra Leone Property search/checks, Sierra Leone court records search, Sierra Leone Adverse media search, Sierra Leone compliance checks, Sierra Leone Business and market intelligence, Sierra Leone Risk intelligence data, Sierra Leone Third-party enhanced due diligence, Sierra Leone Investigative services.`,
	},
	{
		id: 25,
		name: `Togo`,
		content: `Togo company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Togo Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Togo Company Profile Search, Togo Credit reports, Togo Due diligence services, Togo Litigation search/checks, Togo Property search/checks, Togo court records search, Togo Adverse media search, Togo compliance checks, Togo Business and market intelligence, Togo Risk intelligence data, Togo Third-party enhanced due diligence, Togo Investigative services.`,
	},
	{
		id: 26,
		name: `Equitorial Guinea`,
		content: `Equatorial Guinea company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Equatorial Guinea Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Equatorial Guinea Company Profile Search, Equatorial Guinea Credit reports, Equatorial Guinea Due diligence services, Equatorial Guinea Litigation search/checks, Equatorial Guinea Property search/checks, Equatorial Guinea court records search, Equatorial Guinea Adverse media search, Equatorial Guinea compliance checks, Equatorial Guinea Business and market intelligence, Equatorial Guinea Risk intelligence data, Equatorial Guinea Third-party enhanced due diligence, Equatorial Guinea Investigative services.`,
	},
	{
		id: 27,
		name: `Gabon`,
		content: `Gabon company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Gabon Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Gabon Company Profile Search, Gabon Credit reports, Gabon Due diligence services, Gabon Litigation search/checks, Gabon Property search/checks, Gabon court records search, Gabon  Adverse media search, Gabon compliance checks, Gabon Business and market intelligence, Gabon Risk intelligence data, Gabon Third-party enhanced due diligence, Gabon Investigative services.`,
	},
	{
		id: 28,
		name: `Angola`,
		content: `Angola company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Angola Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Angola Company Profile Search, Angola Credit reports, Angola Due diligence services, Angola Litigation search/checks, Angola Property search/checks, Angola court records search, Angola  Adverse media search, Angola compliance checks, Angola Business and market intelligence, Angola Risk intelligence data, Angola Third-party enhanced due diligence, Angola Investigative services.`,
	},
	{
		id: 29,
		name: `Eritrea`,
		content: `Eritrea Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Eritrea Company Profile Search, Eritrea Credit reports, Eritrea Due diligence services, Eritrea Adverse media search, Eritrea compliance checks, Eritrea Business and market intelligence, Eritrea Risk intelligence data, Eritrea Third-party enhanced due diligence, Eritrea Investigative services.`,
	},
	{
		id: 30,
		name: `Ethiopia`,
		content: `Ethiopia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Ethiopia Company Profile Search, Ethiopia Credit reports, Ethiopia Due diligence services, Ethiopia Adverse media search, Ethiopia compliance checks, Ethiopia Business and market intelligence, Ethiopia Risk intelligence data, Ethiopia Third-party enhanced due diligence, Ethiopia Investigative services.`,
	},
	{
		id: 31,
		name: `Djibouti`,
		content: `Djibouti Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Djibouti Company Profile Search, Djibouti Credit reports, Djibouti Due diligence services, Djibouti Adverse media search, Djibouti compliance checks, Djibouti Business and market intelligence, Djibouti Risk intelligence data, Djibouti Third-party enhanced due diligence, Djibouti Investigative services.`,
	},
	{
		id: 32,
		name: `South Sudan`,
		content: `South Sudan Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		South Sudan Company Profile Search, South Sudan Credit reports, South Sudan Due diligence services, South Sudan Adverse media search, South Sudan compliance checks, South Sudan Business and market intelligence, South Sudan Risk intelligence data, South Sudan Third-party enhanced due diligence, South Sudan Investigative services.`,
	},
	{
		id: 33,
		name: `Burundi`,
		content: `Burundi Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Burundi Company Profile Search, Burundi Credit reports, Burundi Due diligence services, Burundi Adverse media search, Burundi compliance checks, Burundi Business and market intelligence, Burundi Risk intelligence data, Burundi Third-party enhanced due diligence, Burundi Investigative services.`,
	},
	{
		id: 34,
		name: `Comoros`,
		content: `Comoros Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Comoros Company Profile Search, Comoros Credit reports, Comoros Due diligence services, Comoros Adverse media search, Comoros compliance checks, Comoros Business and market intelligence, Comoros Risk intelligence data, Comoros Third-party enhanced due diligence, Comoros Investigative services.`,
	},
	{
		id: 35,
		name: `S??o Tom?? and Pr??ncipe `,
		content: `S??o Tom?? and Pr??ncipe company registry documents- Registry extracts, annual returns certificate of incorporation.
		S??o Tom?? and Pr??ncipe Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		S??o Tom?? and Pr??ncipe Company Profile Search, S??o Tom?? and Pr??ncipe Credit reports, S??o Tom?? and Pr??ncipe Due diligence services, S??o Tom?? and Pr??ncipe Litigation search/checks, S??o Tom?? and Pr??ncipe Property search/checks, S??o Tom?? and Pr??ncipe court records search, S??o Tom?? and Pr??ncipe  Adverse media search, S??o Tom?? and Pr??ncipe compliance checks, S??o Tom?? and Pr??ncipe Business and market intelligence, S??o Tom?? and Pr??ncipe Risk intelligence data, S??o Tom?? and Pr??ncipe Third-party enhanced due diligence, S??o Tom?? and Pr??ncipe Investigative services.`,
	},
	{
		id: 36,
		name: `Kenya`,
		content: `We are Africa EXPERTS in our services, we do have extensive networks of operations & credible sources to work with in various Regions & Countries. <br/><br/>Below are the services we can be able to offer in Kenya. Kenya company registry documents- Registry exrtacts, annual returns certificate of incorporation. <br/><br/>Kenya Business information reports- company name &amp; registration Number, legal status, Registered address, shareholdings &amp; directorships. Kenya Credit reports, Kenya Due diligence services, Kenya Litigation search/checks, Kenya Property search/checks, Kenya court records search, Kenya Adverse media search, Kenya compliance checks, Kenya Directorships Checks/search, Kenya Shareholdings Checks/search, Kenya Business and market intelligence, Kenya Risk intelligence data, Kenya Third-party enhanced due diligence, Kenya Investigative services.`,
	},
];

const printArea = document.querySelector('#content');

const dropdown = () => {
	const component = document.createElement('div');

	const input = createInput();
	const dropdown = showDropdown();

	component.appendChild(input);
	component.appendChild(dropdown);
	printArea.appendChild(component);
};

const createInput = () => {
	// Creates the input outline
	const input = document.createElement('div');
	input.classList = 'input';
	input.addEventListener('click', toggleDropdown);

	// Creates the input placeholder content
	const inputPlaceholder = document.createElement('div');
	inputPlaceholder.classList = 'input__placeholder';

	const placeholder = document.createElement('p');
	placeholder.textContent = 'Select Country';
	placeholder.classList.add('placeholder');

	// Appends the placeholder and chevron (stored in assets.js)
	inputPlaceholder.appendChild(placeholder);
	inputPlaceholder.appendChild(dropdownIcon());
	input.appendChild(inputPlaceholder);

	return input;
};

const showDropdown = () => {
	const structure = document.createElement('div');
	structure.classList.add('structure', 'hide');

	countries.forEach((country) => {
		const { id, name, content } = country;
		const option = document.createElement('div');

		option.addEventListener('click', () => selectOption(name));
		option.addEventListener('click', () => selectContentOption(content));
		option.setAttribute('id', id);
		option.setAttribute('class', 'options');

		const n = document.createElement('h5');
		n.textContent = name;

		// const t = document.createElement('p');
		// t.textContent = `(${content})`;

		option.appendChild(n);
		// option.appendChild(t);
		structure.appendChild(option);
	});
	return structure;
};

const toggleDropdown = () => {
	const dropdown = document.querySelector('.structure');
	dropdown.classList.toggle('hide');

	const input = document.querySelector('.input');
	input.classList.toggle('input__active');
};

const selectOption = (name) => {
	const text = document.querySelector('.placeholder');
	const country = document.querySelector('#country');
	text.textContent = name;
	country.textContent = name;
	text.classList.add('input__selected');
	toggleDropdown();
};

const selectContentOption = (content) => {
	const text = document.querySelector('#content-info');
	text.innerHTML = content;

	// text.classList.add('input__selected');
	// toggleDropdown();
};

dropdown();

// Select Kenya on page load as default selected value
let options = document.querySelectorAll('.options'),
	name = 'Kenya',
	contentSelected = `We are Africa EXPERTS in our services, we do have extensive networks of operations & credible sources to work with in various Regions & Countries. <br/><br/>Below are the services we can be able to offer in Kenya. Kenya company registry documents- Registry exrtacts, annual returns certificate of incorporation. <br/><br/>Kenya Business information reports- company name &amp; registration Number, legal status, Registered address, shareholdings &amp; directorships. Kenya Credit reports, Kenya Due diligence services, Kenya Litigation search/checks, Kenya Property search/checks, Kenya court records search, Kenya Adverse media search, Kenya compliance checks, Kenya Directorships Checks/search, Kenya Shareholdings Checks/search, Kenya Business and market intelligence, Kenya Risk intelligence data, Kenya Third-party enhanced due diligence, Kenya Investigative services.`;

// console.log(options[0].childNodes[0].textContent);
// console.log(options);

for (i = 0; i < options.length; i++) {
	if (options[i].textContent.indexOf(name) > -1) {
		selectOption(name);
		selectContentOption(contentSelected);
		toggleDropdown();
		break;
	}
}
