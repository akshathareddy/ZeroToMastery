import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import { robots } from './robots';

import 'tachyons';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React-Fragment>
		<div className="tc code">
			<h1 className="blue">Robot Friends</h1>
			<p>Search <input type="text"/> </p>
		</div>
		<CardList
			robots={robots}/>
	</React-Fragment>
	, document.getElementById('root'));
serviceWorker.unregister();
