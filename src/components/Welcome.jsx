import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from
  '@material-ui/core/Typography';

import Logo from 'components/Logo';

const Welcome = props => {
  return (
    <Card>
      <CardContent>
        <Logo className="main-logo" />
        <Typography><h1>Grok is coming soon!</h1>
          <ul>
            <li>Answer every question.</li>
            <li>Solve every problem.</li>
            <li>Help every person.</li>
          </ul>
          <p>Find out more about the grok project at <a href="https://github.com/grok-prime/grok-prime" target="_blank">github</a>.</p>
        </Typography>
      </CardContent>
    </Card>
  )
};

export default Welcome;