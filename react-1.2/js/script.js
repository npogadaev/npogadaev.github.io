import React from 'react';
import ReactDOM from 'react-dom';

class TwitComponent extends React.Component {
	render() {
		return (
			<div className="tweet">
				<img className="tweet-avatar" 
					src={this.props.avatar} 
					alt={this.props.title} 
				/>
				<div className="tweet-body">
					<h2 className="tweet-author">{this.props.name}</h2>
					<p className="tweet-text">{this.props.text}</p>
					<img className="tweet-image" src={this.props.imeg} alt="imeg" />
					<br />
					likes:{this.props.likes} retwit:{this.props.retwit}
				</div>
			</div>
		);
	};
};

ReactDOM.render(
	<div>
		<TwitComponent 
			avatar="ava.jpeg"
			name="Admin"
			text="Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
			 Приставка раз от всех подпоясал рукописи, свое последний, они это использовало то по всей,
			 букв ведущими, предупредила моей живет пор. Своих силуэт жаренные несколько бросил путь, снова,
			 на берегу безопасную парадигматическая родного заголовок ведущими знаках образ, не первую мир пояс
			 свое вскоре которой!"
			imeg="night.jpeg"
			likes={20}
			retwit={10}
		/>
	</div>,
	document.getElementById('twit')
);