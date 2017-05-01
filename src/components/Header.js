import React, { PropTypes } from 'react';
import { Button, Icon } from 'react-lightning-design-system';

export default class Header extends React.Component {
  static get propTypes() {
    return {
      onClickNew: PropTypes.func.isRequired,
    };
  }

  render() {
    return (
      <div className="slds-page-header" role="banner">
        <div className="slds-grid">
          <div className="slds-col">
            <div className="slds-media">
              <div className="slds-media__figure">
                <span className="slds-icon__container slds-icon__container--circle slds-icon-action-description">
                <svg aria-hidden="true" className="slds-icon slds-icon--medium ">
                  <Icon
                    category="standard"
                    size="medium"
                    icon="task"
                  />
                </svg>
                </span>
              </div>

              <div className="slds-media__body">
                <p className="slds-text-heading--label">Contacts</p>
                <h1 className="slds-text-heading--medium">My Tasks</h1>
              </div>
            </div>
          </div>

          <div id="newTask" className="slds-col slds-no-flex slds-align-middle">
            <Button type="neutral" onClick={this.props.onClickNew}>
              New Task
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
