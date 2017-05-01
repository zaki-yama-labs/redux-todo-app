import React from 'react';
import { Icon } from 'react-lightning-design-system';

export default class Header extends React.Component {
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
                    icon="contact"
                    textColor={undefined}
                    fillColor={undefined}
                    container={undefined}
                  />
                </svg></span>
              </div>

              <div className="slds-media__body">
                <p className="slds-text-heading--label">Contacts</p>
                <h1 className="slds-text-heading--medium">My Contacts</h1>
              </div>
            </div>
          </div>

          <div id="newContact" className="slds-col slds-no-flex slds-align-middle">
            <button className="slds-button slds-button--neutral">
              New Contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}
