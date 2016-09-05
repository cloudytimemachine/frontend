import React from 'react'

export default React.createClass({
  render() {
    return (
      <form className="navbar-form" role="search">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" name="q" />
            <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div> {/*input-group-btn*/}
        </div> {/*input-group*/}
        </form>
    )
  }
})
