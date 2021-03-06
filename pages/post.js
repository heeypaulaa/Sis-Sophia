import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { Container } from '../styles/style'

const layoutStyle = {
  marginTop: 80,
  marginLeft: 150,
  border: '1px solid #DDD'
}

function Post(props) {
  return (
  	<div style={layoutStyle}>
		<Layout>
		  <h1>{props.router.query.title}</h1>
		  <p>This is the blog post content.</p>
		</Layout>
    </div>
  )
}

export default withRouter(Post)
