import React from 'react';
import style from './style.scss';

const CardActionBarBtnClasses = {
    Primary: 'primary',
    Secondary: 'secondary'
}

/**
 * Material UI style(code-structure wise) card design. Entire idea behind this is to
 * make card a re-usable component.
 */

/**
 * Represent the content are for the card. Card content is typically implemented 
 * by callee of card.
 */
class CardContent extends React.Component {
    render() {
        return (
            <div className="card-content">
                { this.props.children }
            </div>
        );
    }
}

/**
 * CardActionBar represent the actions which can be taken on the card. Actions are typically taken in 
 * form of button (primary/secondary button)
 */
class CardActionBar extends React.Component {

    getBtn = (text, _className, handler = ()=>{}) => {

        return (
            <div    className={`btn ${_className}`}
                    onClick={e => handler(e)}>
                { text }
            </div>
        )
    }

    render() {
        return (
            <div className="button-actions">
                <div>
                    { 
                        this.props.secondaryBtnText && 
                        this.getBtn(this.props.secondaryBtnText, CardActionBarBtnClasses.Secondary, this.props.secondaryBtnClick)
                    }
                    { 
                        this.props.primaryBtnText && 
                        this.getBtn(this.props.primaryBtnText, CardActionBarBtnClasses.Primary, this.props.primaryBtnOnClick)
                    }
                    { this.props.children }
                </div>
            </div>
        );
    }
}

/**
 * CardSubTitle represent the subtitle in the card which is typically muted in nature.
 */
class CardSubTitle extends React.Component {
    render() {
        return (
            <div className="card-subtitle">
                { this.props.children }
            </div>
        );
    }
}

/**
 * CardTitle represent heading for card. Typically bold in nature.
 */
class CardTitle extends React.Component {
    state = {  }
    render() {
        return (
            <div className="card-title">
                <h3>
                    { this.props.children }
                </h3>
            </div>
        );
    }
}

/**
 * Card is composed of title, subtitle, content area and action bar. Card component offers both shorthand(wherever applicable) and descriptive implementation.
 */
class Card extends React.Component {

    // static Content = CardContent;
    // static Title = CardTitle;
    
    render() {
        return (
            <div className="card">
                { this.props.title && <CardTitle>{this.props.title}</CardTitle>}
                { this.props.subTitle && <CardSubTitle>{this.props.subTitle}</CardSubTitle>}
                { this.props.children }
            </div>
        );
    }
}

export { Card, CardTitle, CardContent, CardSubTitle, CardActionBar };

/**
 * Working example ( Travel Pass) 
 * 
 * <Card title="Travel Pass" subTitle="Your Current Bill Amount">
        <CardContent>
            <div className="bill-amount">
                <span className="amount">$100.00</span>
            </div>
            <div className="bill-details">
                <span>Issue Date: 16/12/2016</span>
                <span>Past Due: $15.00</span>
            </div>
        </CardContent>
        <CardActionBar  
            primaryBtnText="View Bill"
            secondaryBtnText="Pay my bill"
            secondaryBtnClick={e => console.log('secondary - ', e)}
        ></CardActionBar>

    </Card>
 */