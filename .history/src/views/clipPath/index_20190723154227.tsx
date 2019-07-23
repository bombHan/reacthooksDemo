import * as React from 'react';
import './index.scss';

class ClipPath extends React.Component {

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
                <div className="fa">
                    <p>polygon</p>
                    <p>值为多个坐标点组成，坐标第一个值是x方向，第二个值是y方向。</p>
                    <p>左上角为原点，右下角是(100%,100%)的点。</p>
                    <div className="polygon1"/>
                    <div className="polygon2"/>
                    <div className="polygon3"/>
                </div>

                {/* <div className="we sun"/> */}
            </div>
        );
    }
}

export default ClipPath;
