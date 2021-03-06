import * as React from 'react';

export interface HomeProps {
    data: object;
}

interface HomeState {
    res: any;
}

class FlexBugDemo extends React.Component<HomeProps, HomeState> {

    public state: HomeState = {
        res: null,
    };

    public render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: 50,
                    // tslint:disable-next-line:object-literal-sort-keys
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        flex: 1,
                        // tslint:disable-next-line:object-literal-sort-keys
                        border: '1px solid #ccc',
                        display: 'flex',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            // tslint:disable-next-line:object-literal-sort-keys
                            display: 'flex',
                        }}
                    >
                        <div
                            style={{
                                background: 'green',
                                width: '400px',
                                // tslint:disable-next-line:object-literal-sort-keys
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            left
                        </div>
                        <div
                            style={{
                                border: '1px solid #ccc',
                                flex: 1,
                                overflow: 'auto',
                                // tslint:disable-next-line:object-literal-sort-keys
                                display: 'flex',
                                background: 'orange',
                            }}
                        >
                            <div
                                style={{
                                    width: '250px',
                                    // tslint:disable-next-line:object-literal-sort-keys
                                    height: '2050px',
                                    border: '1px solid #ccc',
                                    background: 'purple',
                                    flex: 'none',
                                    color: '#fff',
                                }}
                            >
                                righttabledddddddddddddddddd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlexBugDemo;
