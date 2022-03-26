import ReactDom from 'react-dom';
import './index.css';

const app = <img src='/logo.svg' />;
const container = document.getElementById('root');

ReactDom.render(app, container);
