import React from 'react';
import {render} from 'react-dom';
import styles from './style.scss';
import Button from 'react-bootstrap/lib/Button';
import {Collapse, Well} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Tab extends React.Component{
  render () {
    return <div>
      <li
        className={ this.props.isActive == this.props.id? 'test active': 'test' }
        onClick={ this.props.onActiveTab }
        >

          <p>
            <span className="image-wrap">
              <FontAwesome
                className=''
                name={this.props.icon}
                size='lg'
                //  spin
                style={{}}
              />
            </span>
            <span className='padding-10px'>
              { this.props.content }
            </span>
          </p>

        </li>
        <Collapse  in={this.props.isActive ==this.props.id}>

          <div >
            {this.props.subMenu.map(function(a, b){
              if(a.name !=undefined)
              return  <p className="chiled-menu-items" key={b}>
                {a.name}
              </p>
            })}


          </div>

        </Collapse>
      </div>

    }
  };

  class Tabs extends React.Component{
    constructor(props) {
      super(props);
      this.state = { };
    }
    getInitialState() {
      return { selectedTabId: 1 }
    }

    isActive (id) {
      return this.state.selectedTabId;
    }

    setActiveTab  (selectedTabId) {
      this.setState({ selectedTabId });
    }

    render () {
      console.log(this.props.selectedPanelAccountType)
      const total = this.props.data.points.total
      let isShow = true
      const tabs = total.map(function (el, i) {
        if(!this.props.selectedPanelAccountType){
          isShow = true
        }else if(el.accountType.indexOf(this.props.selectedPanelAccountType[0]) !==-1){
          isShow = true
        }else{
          isShow = false
        }
        if(isShow)
        return <Tab
          key={ i }
          id={ el.id }
          content={ el.name }
          icon = {el.fontIcon}
          subMenu = {el.subMenu}
          isActive={ this.isActive(el.id) }
          onActiveTab={ this.setActiveTab.bind(this, el.id) }
          / >
        }, this);

        return <ul className="list-unstyled side-nav padding-ul" >
          { tabs }
        </ul>
      }
    };

    export default Tabs;
