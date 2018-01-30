import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';
const Fragment = React.Fragment;

setDefaultProps({
    visibleClassName: 'animation-visible',
  });

const animatedStatements = 
            <Fragment>
                <OnVisible className="animation-slideLeft">
                    <div className="column has-text-centered">
                        <p className="title is-1">36</p>
                        <p className="subtitle is-6 first">Hours</p>
                        <p className="subtitle is-6">fully devoted learning experience</p>
                    </div>
                </OnVisible>
                <OnVisible className="animation-slideRight">
                    <div className="column has-text-centered">
                        <p className="title is-2">2</p>
                        <p className="subtitle is-6 first">Days</p>
                        <p className="subtitle is-6">programs at different locations</p>
                    </div>
                </OnVisible>
                <OnVisible className="animation-slideLeft">
                    <div className="column has-text-centered">
                        <p className="title is-2">8</p>
                        <p className="subtitle is-6 first">Lectures</p>
                        <p className="subtitle is-6">from mentors & entrepreneurs!</p>
                    </div>
                </OnVisible>
                <OnVisible className="animation-slideRight">
                    <div className="column has-text-centered">
                        <p className="title is-2">1</p>
                        <p className="subtitle is-6 first">Or more mentors</p>
                        <p className="subtitle is-6">to work closely with your team</p>
                    </div>
                </OnVisible>
            </Fragment>

export default animatedStatements;