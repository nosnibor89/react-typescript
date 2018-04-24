import * as React from 'react';

interface AppProps {
    name: string;
}

export class App extends React.Component<AppProps, any> {

    render() {
        return <h1>Hello {this.props.name} from app</h1>
    }
}
