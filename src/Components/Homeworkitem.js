import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Homeworkitem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '2px #ccc dotted',
           textDecoration: this.props.homeworkz.completed ?
           'line-through' : 'none'
       }
    }



  render() {
    const { id, title } = this.props.homeworkz;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange = {this.props.markComplete.bind
        (this, id)} /> {' '}
        { title }
        <button onClick={this.props.delhomework.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
Homeworkitem.propTypes = {
    homework: PropTypes.object.isRequired
  }

const btnStyle = {
    background: '#bf0000',
    color: '#fff',
    border: '5px',
    padding: '6px 10px',
    bordeRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default Homeworkitem
