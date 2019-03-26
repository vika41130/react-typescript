import * as React from 'react';

export interface IMyClassProps {
    isMarried: boolean;
    name?: string;
}

export interface IMyClassState {
    age: number;
}


class MyClass extends React.Component<IMyClassProps, IMyClassState> {

    public static defaultProps: Partial<IMyClassProps> = {
        name: 'John',
    }

    public state = {
        age: 21
    }

    public render() {
        return (
            <div>
                <h1>Name: {this.props.name} </h1>
                <h1>Age: {this.state.age} </h1>
                <h1> {this.props.isMarried ? 'Married' : 'Not Married'} </h1>
            </div>
        );
    }
}

export default MyClass;