/**
 * Created by intelligrape on 5/6/17.
 */
import React, { Component } from 'react';
import styles from './style.scss';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-content row">
                        <div className="col-sm-5">
                            <h5 className="help-text">Have questions about Awarex?</h5>
                        </div>
                        <div className="question-circle col-sm-2">?</div>
                        <div className="ex-logo col-sm-2">eX</div>
                        <div className="col-sm-3">
                            <img className="google-store" src={`/images/google-store-img.jpg`}/>
                            <img className="app-store" src={`/images/app-store-img.jpg`}/>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;
