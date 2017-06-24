// Import React
import React from 'react';
import _ from 'lodash';

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
	city: require('../assets/city.jpg'),
	kat: require('../assets/kat.png'),
	logo: require('../assets/formidable-logo.svg'),
	markdown: require('../assets/markdown.png'),
	zissou: require('../assets/zissou.jpg'),
	specificityGraph: require('../assets/specificity-graph.png'),
	me: require('../assets/matt.png'),
	fin: require('../assets/fin.png'),
};

preloader(images);

const colors = {
	primary: '#000',
	secondary: '#92D400',
};
const theme = createTheme(colors);

export default class Presentation extends React.Component {

	_getCodeExamples() {
		const examples = [
			{color: 'blue'},
			{color: 'green'},
			{color: 'red'},
			{color: 'pink'},
			{color: 'yellow'},
			{color: 'orange'},
		];

		const slides = [];

		_.each(examples, (example, i) => {
			slides.push(this._getCodeExampleSlide(i + 1));
			slides.push(this._getCodeExampleResult(example.color));
		});

		return slides;
	}

	_getCodeExampleSlide(i) {
		return (
			<Slide key={`code-example-${i}`} transition={['slide']} bgColor='primary'>
				<Heading caps size={4} textColor='secondary'>
					What color am I?
				</Heading>
				<Layout>
					<Fill>
						<CodePane
							lang='html'
							source={require(`raw!../assets/example${i}.html.example`)}
							margin='20px auto'
							height='400px'
						/>
					</Fill>
					<Fill>
						<CodePane
							lang='css'
							source={require(`raw!../assets/example${i}.css.example`)}
							margin='20px auto'
							height='400px'
						/>
					</Fill>
				</Layout>
			</Slide>
		);
	}

	_getCodeExampleResult(color) {
		return (
			<Slide key={`code-example-${color}`} transition={['slide']} bgColor={color}>
				<Heading fit caps lineHeight={1} textColor='white'>
					{color}
				</Heading>
			</Slide>
		);
	}

	render() {
		return (
		<Spectacle theme={theme}>
		<Deck transition={['zoom', 'slide']} transitionDuration={500}>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading fit caps lineHeight={1} textColor='white'>
					Something about
				</Heading>
				<Image src='http://2.bp.blogspot.com/-41v6n3Vaf5s/UeRN_XJ0keI/AAAAAAAAN2Y/YxIHhddGiaw/s1600/css.gif'/>
			</Slide>
			<Slide transition={['slide']} bgColor='primary'>
				<Heading fit caps lineHeight={2} textColor='secondary'>
					Matt’s simple tips for better CSS
				</Heading>
				<Image src={images.zissou} height='280px'/>
				<Text textColor='white'>You aren't important</Text>
				<Text textColor='white'>Forget your ID</Text>
				<Text textColor='white'>World War Z</Text>
				<Text textColor='white'>Don't get <i>too</i> sassy</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading fit caps lineHeight={1} textColor='primary'>
					Specificity
				</Heading>
				<Heading lineHeight={2}>
					{'<SpecificityWar>'}
				</Heading>
			</Slide>
			{this._getCodeExamples()}
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps fit textColor='primary' textFont='primary'>
					How do you even?
				</Heading>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps fit textColor='primary' textFont='primary'>
					Rules of specificity
				</Heading>
				<Layout>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							1000
						</Heading>
						<Text textColor='white'>
							inline style
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							100
						</Heading>
						<Text textColor='white'>
							id
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							10
						</Heading>
						<Text textColor='white'>
							class
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							1
						</Heading>
						<Text textColor='white'>
							element
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps fit textColor='primary' textFont='primary'>
					Need a calculator?
				</Heading>
				<Link href='http://specificity.keegan.st/' target='_blank'>
					<Heading caps fit textColor='white'>http://specificity.keegan.st/</Heading>
				</Link>
			</Slide>
			<Slide transition={['slide']} bgColor='black'>
				<Image src='https://stuffandnonsense.co.uk/archives/images/specificitywars-05v2.jpg' height='600px'/>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps fit textColor='primary' textFont='primary'>
					You said something about
				</Heading>
				<Heading caps fit textColor='white' textFont='primary'>
					!important?
				</Heading>
			</Slide>
			{this._getCodeExampleSlide(7)}
			{this._getCodeExampleResult('orange')}
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps fit textColor='primary' textFont='primary'>
					Rules of specificity
				</Heading>
				<Layout>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							<Appear>
								<Image src='https://49.media.tumblr.com/c3a788a6c6fcb3a77c27583ac4e9cadb/tumblr_mw50h0X5W91qcu3vno1_400.gif' width='150px'/>
							</Appear>
						</Heading>
						<Text textColor='white'>
							!important
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							1000
						</Heading>
						<Text textColor='white'>
							inline style
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							100
						</Heading>
						<Text textColor='white'>
							id
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							10
						</Heading>
						<Text textColor='white'>
							class
						</Text>
					</Fill>
					<Fill>
						<Heading caps textColor='white' textFont='primary'>
							1
						</Heading>
						<Text textColor='white'>
							element
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Image src={images.specificityGraph} width='700px' />
				<Text textColor='white'>npm install specificity-graph</Text>
				<Text textColor='white'>./node_modules/specificity-graph/bin/specificity-graph ./dist/assets/v3-0-0/stylesheets/styles.css; open ./specificity-graph/index.html;</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					{'</SpecificityWar>'}
				</Heading>
				<Heading lineHeight={2}>
					{'<ZIndexWar>'}
				</Heading>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading fit>
					{'.foo { z-index: 9999999999999 }'}
				</Heading>
				<Image src='http://stream1.gifsoup.com/view5/2143918/sad-george-michael-o.gif' margin='100px 0 0'/>
			</Slide>
			<Slide transition={['slide']} bgColor='primary'>
				<Heading fit textColor='secondary'>
					The solution is rather simple
				</Heading>
				<Text textColor='white'>This is an example I took from Aztec</Text>
				<CodePane
					lang='css'
					source={require('raw!../assets/zindex.example')}
					margin='20px auto'
					height='400px'/>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					{'</ZIndexWar>'}
				</Heading>
				<Heading lineHeight={2}>
					{'<SassyPants>'}
				</Heading>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Layout>
					<Fill>
						<Heading textAlign='left' textColor='white'>Sass</Heading>
						<CodePane
							lang='css'
							source={require('raw!../assets/sassexample1.sass.example')}
							margin='20px auto'
							height='400px'/>
					</Fill>
					<Fill>
						<Heading textAlign='left' textColor='white'>CSS</Heading>
						<CodePane
							lang='css'
							source={require('raw!../assets/sassexample1.css.example')}
							margin='20px auto'
							height='400px'/>
					</Fill>
				</Layout>
				<Text size={2} textColor='black'>Specificity 60</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Layout>
					<Fill>
						<Heading textAlign='left' textColor='white'>Sass</Heading>
						<CodePane
							lang='css'
							source={require('raw!../assets/sassexample2.sass.example')}
							margin='20px auto'
							height='400px'/>
					</Fill>
					<Fill>
						<Heading textAlign='left' textColor='white'>CSS</Heading>
						<CodePane
							lang='css'
							source={require('raw!../assets/sassexample2.css.example')}
							margin='20px auto'
							height='400px'/>
					</Fill>
				</Layout>
				<Text size={2} textColor='black'>Specificity 20</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					{'</SassyPants>'}
				</Heading>
				<Heading lineHeight={2}>
					{'<DoItBetter>'}
				</Heading>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps lineHeight={2}>
					The <Image src={images.me} width='70px' margin='-50px 0 0'/> approach
				</Heading>
				<CodePane
					lang='css'
					source={require('raw!../assets/sassmatt.sass.example')}
					margin='20px auto'
					height='400px'/>
				<Text>Mean specificity: 20 | Max specificity: 30</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					BEM
				</Heading>
				<Text>Block, Element, Modifier</Text>
				<CodePane
					lang='css'
					source={require('raw!../assets/sassbem.sass.example')}
					margin='20px auto'
					height='400px'/>
				<Text>Mean specificity: 10 | Max specificity: 20</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					OOCSS
				</Heading>
				<Text>Object Oriented CSS</Text>
				<CodePane
					lang='css'
					source={require('raw!../assets/sassoocss.sass.example')}
					margin='20px auto'
					height='400px'/>
				<Text>Mean specificity: 10 | Max specificity: 10</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading caps>
					You already use OOCSS this if you use bootstrap
				</Heading>
				<CodePane
					lang='html'
					source={require('raw!../assets/sassbootstrap.html.example')}
					margin='20px auto'
					height='400px'/>
			</Slide>
			<Slide transition={['slide']} bgColor='primary'>
				<Heading fit caps lineHeight={2} textColor='secondary'>
					Matt’s simple tips for better CSS
				</Heading>
				<Image src={images.zissou} height='280px'/>
				<Text textColor='white'>You aren't important</Text>
				<Text textColor='white'>Forget your ID</Text>
				<Text textColor='white'>World War Z</Text>
				<Text textColor='white'>Don't get <i>too</i> sassy</Text>
			</Slide>
			<Slide transition={['slide']} bgColor='primary'>
				<Image src='https://images-na.ssl-images-amazon.com/images/I/41DDG6BRYSL.jpg'/>
				<Link href='https://jsbin.com/kifide/1/edit?html,css,output' target='_blank'>
					<Text textColor='white'>https://jsbin.com/kifide/1/edit?html,css,output</Text>
				</Link>
			</Slide>
			<Slide transition={['slide']} bgColor='primary'>
				<Image src={images.fin} height='500px'/>
			</Slide>
			<Slide transition={['slide']} bgColor='secondary'>
				<Heading lineHeight={2}>
					{'</DoItBetter>'}
				</Heading>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
			</Slide>
		</Deck>
		</Spectacle>
	);
	}
}
