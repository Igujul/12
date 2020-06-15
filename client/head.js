import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = (props) => (
  <Helmet>
    <title>SkillCrucial Boilerplate - {props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
  </Helmet>
)

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'skillcrucial.com'
}

export default Head
repos
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { user } = useParams()
  return (
    <div>
      {/* <div>{JSON.stringify(props)}</div> */}
      {props.repos.map((repo) => (
        <div key={repo.id}>
          <Link to={`/${user}/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)