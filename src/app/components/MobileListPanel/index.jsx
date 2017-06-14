import React from 'react';
import {render} from 'react-dom';
import styles from './style.scss';
import Button from 'react-bootstrap/lib/Button';
import {Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Tabs from './../Menu'

const getSelectedListId = (a) =>{
  console.log(a)
}
class MobileListPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = { };
  }
  getInitialState() {
    return { selectedPanelTabId: 1001 , selectedPanelAccountType:['P', 'H', 'I', 'T']}

  }

  isActive (id) {
    console.log( this.state.selectedPanelTabId, id)
    return this.state.selectedPanelTabId;
  }

  setActiveTab  (selectedPanelTabId, accountType) {
    console.log("L:L:LL", selectedPanelTabId, accountType)
    this.setState({ selectedPanelTabId:selectedPanelTabId, selectedPanelAccountType:accountType });
    this.props.changeFirst({selectedPanelTabId:selectedPanelTabId,  selectedPanelAccountType:accountType})
    console.log("L:L:LL", selectedPanelTabId, accountType)
  }

  render () {
    const changeState = this;
    return <div className="mobile-panel-size">
      <Panel header={this.props.data.usnerName + "'s Account"} >
        Account Number {this.props.data.accountNumber}
        <ul className="list-unstyled" >
          {this.props.data.total.map(function(a, b){
            if(a.name !=undefined)
            return  <li
              className="li-style"
              key={b}
              onClick={changeState.setActiveTab.bind(changeState, a.id, a.accountType)}
              className={ changeState.state.selectedPanelTabId == a.id? ' li-style active-mobile': 'li-style' }>
              <span className="image-wrap">
                <FontAwesome
                  className='mobile-panel-icon'
                  name={a.fontIcon}
                  size='3x'
                  //  spin
                  style={{}}
                  />
              </span>
              <div >
                <h5>
                  {a.name}
                </h5>
                <p>
                  {a.number}
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
