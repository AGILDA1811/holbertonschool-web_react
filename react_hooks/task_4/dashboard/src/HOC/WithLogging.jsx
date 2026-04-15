/* eslint-disable */
import React from "react";

const WithLogging = (WrappedComponent) => {
    const componentName =
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component";

    const WithLoggingHOC = class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    WithLoggingHOC.displayName = `WithLogging(${componentName})`;

    return WithLoggingHOC;
};

export default WithLogging;
