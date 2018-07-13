import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';

const defaultColor = '#ADD4FF';
const massonryOptions = {
	columnWidth: 240,
	gutter: 10,
	isFitWidth: true
};

class Note extends React.Component {
	handleDelete = () => {
		this.props.onDelete(this.props.id);
	};

	render() {
		return (
			<div className="note" style={{backgroundColor: this.props.color}}>
				<span className="note__delete-icon" onClick={this.handleDelete}>&#215;</span>
				{this.props.children}
			</div>
		);
	};
};

class NoteEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	};

	handleTextChange = (e) => {
		this.setState({text: e.target.value});
	};

	handleNoteAdd = () => {
		const newNote = {
			text: this.state.text,
			color: defaultColor,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.resetState();

	};

	resetState = () => {
		this.setState({text: ''});
	};

	render() {
		return (
			<div className="editor">
				<textarea 
					rows={5}
					placeholder="Введите текст в это поле..."
					className="editor__textarea"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<button className="editor__button" onClick={this.handleNoteAdd}>
					Добавить
				</button>
			</div>
		);
	};
};

class NotesGrid extends React.Component {
	render() {
		return (
			<Masonry 
				className="notes"
				options={massonryOptions}
			>
				{
					this.props.notes.map(note => 
							<Note
								key={note.id}
								id={note.id}
								color={note.color}
								onDelete={this.props.onNoteDelete}
							>
								{note.text}
							</Note>
						)
				}
			</Masonry>
		);
	};
};

class NotesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			notes: []
		};
	};

	componentDidMount() {
		const savedNotes = JSON.parse(localStorage.getItem('notes'));

		if (savedNotes) {
			this.setState({notes: savedNotes});
		};
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.notes !== this.state.notes) {
		this.saveToLocalStorage();
		};
	};

	saveToLocalStorage = () => {
		const notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	};

	handleNoteAdd = (newNote) => {
		this.setState({notes: [newNote, ...this.state.notes]});
	};

	handleNoteDelete = (noteId) => {
		this.setState({notes: this.state.notes.filter(note => note.id !== noteId)});
	};

	render() {
		return (
			<div className="notes-app">
				<h1 className="app-title">{this.props.text}</h1>
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NotesGrid 
					notes={this.state.notes}
					onNoteDelete={this.handleNoteDelete} 
				/>
			</div>
		);
	};
};

ReactDOM.render (
	<NotesApp text="Notes" />,
	document.querySelector('#root')
);