import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor () {
    super(props)
    this.state = {

    }
  },
  someMethod () {
    this.setState({blah: 'string'})
  },
  render () {
    return (
      <header>
        <h1 onChange={this.someMethod}>
          <Link to='/'>
            svideo
          </Link>
        </h1>
      </header>
    )
  }
}

const = { func, bool, string } = React.propTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
