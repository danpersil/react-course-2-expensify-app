// HOC - a component that renders another component
// Reuse code 
// Render hijacking
// Prop manipulation
// Abstract state
//Simple component
import React from "react";
import { createRoot } from "react-dom/client";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
                (<WrappedComponent {...props} />) :
                (<p>Please login to view info.</p>)
            }
        </div>
    );
};

const AuthInfo = withAuthentication(Info);

// createRoot(document.getElementById('app'))
//     .render(<AdminInfo isAdmin={true} info="There are the details" />);

createRoot(document.getElementById('app'))
    .render(<AuthInfo isAuthenticated={true} info="There are the details" />);