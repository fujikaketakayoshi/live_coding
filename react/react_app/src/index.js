import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// 
// function Bpp() {
//     return (
//         <div>
//             <Welcome name="Saara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }
// 
// function tick() {
//     root.render(<Clock date={new Date()} />);
// }
// 
// 
// setInterval(tick, 1000);

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
// 
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
// 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
// 
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function Form() {
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('clicked!');
//     }
//     
//     return(
//         <form onSubmit={handleSubmit}>
//             <button type="submit">submit</button>
//         </form>
//     );
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Form />
// );

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true}
//         
//         this.handleClick = this.handleClick.bind(this);
//     }
//     
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Toggle />
// );

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//             return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// 
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //     <Greeting isLoggedIn={false} />
// // );
// 
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
// 
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// 
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
// 
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
// 
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
// 
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
// 
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<LoginControl />);

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello</h1>
//             {unreadMessages.length > 0 && 
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }
// 
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Mailbox unreadMessages={messages} />);

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//     
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }
// 
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//     
//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }
//     
//       render() {
//         return (
//           <div>
//             <WarningBanner warn={this.state.showWarning} />
//             <button onClick={this.handleToggleClick}>
//               {this.state.showWarning ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         );
//       }
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Page />);

// function ListItem(props) {
// 	return <li>{props.value}</li>;
// }
// 
// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) => 
// 		<ListItem key={number.toString()} value={number} />
// 	);
// 	return (
// 		<ul>{listItems}</ul>
// 	);
// }
// 
// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList numbers={numbers} />);

// function Blog(props) {
// 	const sidebar = (
// 		<ul>
// 			{props.posts.map((post) => 
// 				<li key={post.id}>
// 					{post.title}
// 				</li>
// 			)}
// 		</ul>
// 	);
// 	const content = props.posts.map((post) =>
// 		<div key={post.id}>
// 			<h3>{post.title}</h3>
// 			<p>{post.content}</p>
// 		</div>
// 	);
// 	return (
// 		<div>
// 			{sidebar}
// 		<hr />
// 			{content}
// 		</div>
// 	);
// }
// 
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
// 		
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	
// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}
// 	
// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.state.value);
// 		event.preventdefault();
// 	}
// 	
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 					<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<NameForm />);

// class EssayForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: 'Please write an essay about your favorite DOM element.'};
// 		
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	
// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}
// 	
// 	handleSubmit(event) {
// 		alert('A essay was submitted: ' + this.state.value);
// 		event.preventdefault();
// 	}
// 	
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Esssay:
// 					<textarea value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<EssayForm />);

// class FlavorForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: 'coconut'};
// 		
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	
// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}
// 	
// 	handleSubmit(event) {
// 		alert('Your flavor is: ' + this.state.value);
// 		event.preventdefault();
// 	}
// 	
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					flavor:
// 					<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="grapefruit">Grapefruit</option>
// 						<option value="lime">Lime</option>
// 						<option value="coconut">Coconut</option>
// 						<option value="mango">Mango</option>
// 					</select>
// 				</label>	
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<FlavorForm />);

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };
// 
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
// 
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
// 
//     this.setState({
//       [name]: value
//     });
//   }
// 
//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Reservation />);

// function BoilingVerdict(props) {
// 	if (props.celsius >= 100) {
// 		return <p>The water would boil.</p>
// 	}
// 	return <p>The water would not boil.</p>
// }
// 
// function toCelsius(fahrenheit) {
// 	return (fahrenheit - 32) * 5 / 9;
// }
// 
// function toFahrenheit(celsius) {
// 	return (celsius * 9 / 5) + 32;
// }
// 
// function tryConvert(temperature, convert) {
// 	const input = parseFloat(temperature);
// 	if (Number.isNaN(input)) {
// 		return '';
// 	}
// 	const output = convert(input);
// 	const rounded = Math.round(output * 1000) / 1000;
// 	return rounded.toString();
// }
// 
// 
// const scaleName = {
// 	c: 'Celsius',
// 	f: 'Fahrenheit'
// };
// 
// class TempratureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	
// 	handleChange(e) {
// 		this.props.onTemperatureChange(e.target.value);
// 	}
// 	
// 	render() {
// 		const temperature = this.props.temperature;
// 		const scale = this.props.scale;
// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in {scaleName[scale]}:</legend>
// 				<input
// 					value={temperature}
// 					onChange={this.handleChange} />
// 			</fieldset>
// 		)
// 	}
// }
// 
// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// 		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
// 		this.state = {temperature: '', scale: 'c'};
// 	}
// 	
// 	handleCelsiusChange(temperature) {
// 		this.setState({scale: 'c', temperature});
// 	}
// 	
// 	handleFahrenheitChange(temperature) {
// 		this.setState({scale: 'f', temperature});
// 	}
// 	
// 	render() {
// 		const scale = this.state.scale;
// 		const temperature = this.state.temperature;
// 		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
// 		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
// 		return (
// 			<div>
// 				<TempratureInput
// 					scale="c"
// 					temperature={celsius}
// 					onTemperatureChange={this.handleCelsiusChange} />
// 				<TempratureInput
// 					scale="f"
// 					temperature={fahrenheit}
// 					onTemperatureChange={this.handleFahrenheitChange} />
// 				<BoilingVerdict
// 					celsius={parseFloat(celsius)} />
// 			</div>
// 		)
// 	}
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Calculator />);

// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }
// 
// function WelcomeDialog() {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">
// 				Welcome
// 			</h1>
// 			<p className="Dialog-message">
// 				Thank you.
// 			</p>
// 		</FancyBorder>
// 	);
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<WelcomeDialog />);

// function SplitPane(props) {
// 	return (
// 		<div className="SplitPane">
// 			<div className="SplitPane-left">
// 				{props.left}
// 			</div>
// 			<div className="SplitPane-right">
// 				{props.right}
// 			</div>
// 		</div>
// 	);
// }
// 
// function Contacts() {
// 	return (
// 		<p>Contacts</p>
// 	);
// }
// 
// function Chat() {
// 	return (
// 		<p>Chat</p>
// 	);
// }
// 
// function Bpp() {
// 	return (
// 		<SplitPane
// 			left={
// 				<Contacts />
// 			}
// 			right={
// 				<Chat />
// 			} />
// 	);
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Bpp />);


// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }
// 
// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">
// 				{props.title}
// 			</h1>
// 			<p className="Dialog-message">
// 				{props.message}
// 			</p>
// 		</FancyBorder>
// 	);
// }
// 
// function WelcomeDialog() {
// 	return (
// 		<Dialog
// 			title="Welcome"
// 			message="Thank you" />
// 	);
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<WelcomeDialog />);


// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }
// 
// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">
// 				{props.title}
// 			</h1>
// 			<p className="Dialog-message">
// 				{props.message}
// 			</p>
// 			{props.children}
// 		</FancyBorder>
// 	);
// }
// 
// class SignUpDialog extends React.Component {
// 	constructor(props) {
// 			super(props);
// 			this.handleChange = this.handleChange.bind(this);
// 			this.handleSingUp = this.handleSignUp.bind(this);
// 			this.state = {login: ''}
// 	}
// 	
// 	render() {
// 		return (
// 			<Dialog
// 				title="Mars Exploration Program"
// 				message="How should we refer to you?">
// 				<input
// 					value={this.state.login}
// 					onChange={this.handleChange} />
// 				<button onClick={this.handleSignUp}>
// 					Sing Me Up!
// 				</button>
// 			</Dialog>
// 		);
// 	}
// 	
// 	handleChange(e) {
// 			this.setState({login: e.target.value});
// 	}
// 	
// 	handleSignUp() {
//     alert(`Welcome aboard, ${this.state.login}!`);
// 	}
// }
// 
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<SignUpDialog />);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
