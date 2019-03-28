import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import { ButtonLink } from '../components/Botoes'

import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';

class Cadastro extends Component {
	state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

	render() {
		const { classes } = this.props;
		const { expanded } = this.state;
		return (
			<div>
				<Drawer className={classes.drawer} variant="permanent">
	        <div className={classes.toolbar} />
            <MuiExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        			<MuiExpansionPanelSummary>
          			Cadastro
        			</MuiExpansionPanelSummary>
        			<MuiExpansionPanelDetails>
		            <List>
				          {['All mail', 'Trash', 'Spam'].map((text, index) => (
				            <ListItem button key={text}>
				              <ListItemText primary={text} />
				            </ListItem>
				          ))}
				        </List>
        			</MuiExpansionPanelDetails>
      			</MuiExpansionPanel>
      			<MuiExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        			<MuiExpansionPanelSummary>
          			Relatório
        			</MuiExpansionPanelSummary>
        			<MuiExpansionPanelDetails>
		            <List>
				          {['All mail', 'Trash', 'Spam'].map((text, index) => (
				            <ListItem button key={text}>
				              <ListItemText primary={text} />
				            </ListItem>
				          ))}
				        </List>
        			</MuiExpansionPanelDetails>
      			</MuiExpansionPanel>
          	<List>
          		<ListItem button >
          			Débitos
          		</ListItem>
          		<Divider/>
          		<ListItem button >
          			Empréstimo
							</ListItem>
							<Divider/>
							<ListItem button >
          			Devolução
        			</ListItem>

				    </List>
      	</Drawer>
      	<main>
      		<div className={classes.toolbar}/>
      		<div className={classes.content}>
      			{this.state.cadUsuTela}
      		</div>
      	</main>
      	0
		  	Teste
		  </Layout>
			</div>
			
		);
	}
}

const drawerWidth = 50;
const style = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(style)(Cadastro);
