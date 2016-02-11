import React from 'react';
import ReactDOM from 'react-dom';
import reactStamp from 'react-stamp';
import * as cache from 'react-stampit/utils/cache';
import { buildData } from './utils';

const id = cache.uniqueId();

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


const ListContainer = React => {
    reactStamp(React).compose({
            state: {
                selected: null
            },

            onItemSelect(id) {
                this.state.selected = id;
            },

            render() {
                return (
                    <List
                        items={this.props.items}
                        onItemSelect={this.onItemSelect}
                        selected={this.state.selected}
                    />
                );
            }
        }), id);
};

export default function() {
    const el = document.getElementById('run-react-jsx');

    el.addEventListener('click', () => {
        const data = buildData();
        const date = new Date();

        ReactDOM.render(<ListContainer items={data} />, document.getElementById('react-jsx'));
        el.innerHTML = `${(new Date() - date)} ms`;
    });
}
