// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = WrappedComponent => {
    return props => (
        <div>
            {props.isAdmin && <p>This is private info. Plase don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = WrappedComponent => {
    return props => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not logged in</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Here are the details" />, document.getElementById('root'));

