import Angular from 'angular';
import { buildData } from './utils';

export default function (data) {
    Angular
        .module('test', [])
        .controller('controller', $scope => {
            $scope.run = () => {
                const data = buildData();
                const date = new Date();

                $scope.selected = null;
                $scope.$$postDigest(() => {
                    document.getElementById('run-angular').innerHTML = `${(new Date() - date)} ms`;
                });

                $scope.data = data;
            };

            $scope.select = function(item) {
                $scope.selected = item.id;
            };
        });
}