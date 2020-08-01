import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { default as _ } from 'lodash';

class Test extends React.Component {
    prettyPrinArr(arr) {
        return `[${_.join(arr, ', ')}]`;
    }

    prettyPrinArrArr(arrArr) {
        return _.map(arrArr, (arr) => this.prettyPrinArr(arr));
    }

    makeDiv(content) {
        return <div>{content}</div>;
    }

    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <div>
                <div>
                    find(1) on {this.prettyPrinArr(arr)} is{' '}
                    {_.find(arr, (x) => x === 1)}
                </div>
                <div>
                    some(4) on {this.prettyPrinArr(arr)} is{' '}
                    {_.some(arr, (x) => x === 4) ? 'true' : 'false'}
                </div>
                <div>
                    find some(12) on {this.prettyPrinArr(arr)} is{' '}
                    {_.some(arr, (x) => x === 12) ? 'true' : 'false'}
                </div>
                <div>
                    chunk(3) on {this.prettyPrinArr(arr)} is{' '}
                    {this.prettyPrinArrArr(_.chunk(arr, 3))}
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Test />, document.getElementById('root'));
