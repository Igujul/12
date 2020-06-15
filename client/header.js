import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div id="repository-name">{repository || user || 'Welcome'}</div>
      {user && (
        <Link to="/" id="go-back">
          Go Home
        </Link>
      )}
      {repository && (
        <Link to={`/${user}`} id="go-repository-list">
          Go Repository List
        </Link>
      )}
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)