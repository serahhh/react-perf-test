import doAngular from './js/angular';
import doKnockout from './js/knockout';
import doReact from './js/react';
import doReactStampit from './js/react-stampit';
import doVanilla from './js/vanilla';

console.timeEnd('build');

doAngular();

document.addEventListener('DOMContentLoaded', () => {
    doKnockout();
    doReact();
    doReactStampit();
    doVanilla();
});
