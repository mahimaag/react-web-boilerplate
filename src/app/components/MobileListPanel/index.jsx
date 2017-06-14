import React from 'react';
import {render} from 'react-dom';
import styles from './style.scss';
import Button from 'react-bootstrap/lib/Button';
import {Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Tabs from './../Menu'

//Mobile List panel component
class MobileListPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = { selectedPanelTabId: 10088 , selectedPanelAccountType:['P', 'H', 'I', 'T']};
  }


  //Check the initial state of the panel
  isActive (id) {
    console.log( this.state.selectedPanelTabId, id)
    return this.state.selectedPanelTabId;
  }

  //Update the value of the active tab
  setActiveTab  (selectedPanelTabId, accountType) {
    this.setState({ selectedPanelTabId:selectedPanelTabId, selectedPanelAccountType:accountType });
    this.props.changeFirst({selectedPanelTabId:selectedPanelTabId,  selectedPanelAccountType:accountType})
  }

  render () {
    const changeState = this;
    return <div className="mobile-panel-size">
      <Panel header={this.props.data.usnerName + "'s Account"} >
        Account Number {this.props.data.accountNumber}
        <ul className="list-unstyled" >
          {this.props.data.total.map(function(el, id){
            if(el.name !=undefined)
            return  <li
              className="li-style"
              key={id}
              onClick={changeState.setActiveTab.bind(changeState, el.id, el.accountType)}
              className={ changeState.state.selectedPanelTabId == el.id? ' li-style active-mobile': 'li-style' }>
              <span className="image-wrap">
                <FontAwesome
                  className='mobile-panel-icon'
                  name={el.fontIcon}
                  size='3x'
                  style={{}}
                  />
              </span>
              <div >
                <h5>
                  {el.name}
                </h5>
                <p>
                  {el.number}
                </p>
              </div>
           </li>
          })}
        </ul>
      </Panel>
    </div>
  }
};

export default MobileListPanel
