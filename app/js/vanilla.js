import { buildData } from './utils';

export default function() {
    const container = document.getElementById('raw');
    const template = document.getElementById('raw-template').innerHTML;

    document.getElementById('run-raw').addEventListener('click', () => {
        const data = buildData();
        const date = new Date();

        let html = '';

        for (let i = 0; i < data.length; i++) {
            let render = template;
            render = render.replace('{{className}}', '');
            render = render.replace('{{label}}', data[i].label);
            html += render;
        }

        container.innerHTML = html;

        const spans = container.querySelectorAll('.test-data span');
        for (let j = 0; j < spans.length; j++) {
            spans[j].addEventListener('click', (e) => {
                const selected = container.querySelector('.selected');

                if (selected) {
                    selected.className = '';
                }

                e.target.className = 'selected';
            });
        }

        document.getElementById('run-raw').innerHTML = (new Date() - date) + ' ms';
    });
}