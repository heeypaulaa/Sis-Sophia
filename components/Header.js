//import Link from 'next/link'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

export default function Header() {
  return (
    <div>
    	<AppBar color='primary' position ='fixed'>
          <Toolbar>
            <img src="./logo.png" alt="Logo"/>
          </Toolbar>
        </AppBar>
    </div>
  )
}
