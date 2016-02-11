import React from 'react';
import ReactDOM from 'react-dom';
import { buildData } from './utils';

const ListItem = ({
    content,
    onClick,
    selected,
}) => (
    <div className="col-md-12 test-data">
        <span className={selected ? 'selected': ''} onClick={onClick}>
            {content}
        </span>
    </div>
);

const List = ({
    items,
    onItemSelect,
    selected
}) => (
    <div className="row">
        {items.map(({ id, label }) => (
            <ListItem
                content={label}
                key={id}
                onClick={(e) => onItemSelect(id)}
                selected={selected === id}
            />
        ))}
    </div>
);

class ListContainer extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = { selected: null };
        this.onItemSelect = this.onItemSelect.bind(this);
    }

    onItemSelect(id) {
        this.setState({ selected: id });
    }

    render() {
        return (
            <List
                items={this.props.items}
                onItemSelect={this.onItemSelect}
                selected={this.state.selected}
            />
        );
    }
}

export default function() {
    const el = document.getElementById('run-react');

    el.addEventListener('click', () => {
        const data = buildData();
        const date = new Date();

        ReactDOM.render(<ListContainer items={data} />, document.getElementById('react'));
        el.innerHTML = `${(new Date() - date)} ms`;
    });
}
