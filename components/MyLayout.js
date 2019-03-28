import Header from './Header.js'

const layoutStyle = {
  marginTop: 80,
  marginLeft: 150,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
	  <Header/>
      {props.children}
    </div>
  )
}
