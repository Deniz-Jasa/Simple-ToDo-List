import React, { Component } from 'react';
import Homeworkitem from './Homeworkitem';
import PropTypes from 'prop-types';
import './Homework.css'

class Homework extends Component {


  render() {
    return this.props.homework.map((homeworkz) => (
        <Homeworkitem key={homeworkz.id} homeworkz={homeworkz} markComplete=
          {this.props.markComplete} delhomework={this.props.delhomework} />
    ));
  }
}

// PropTypes
Homework.propTypes = {
  homework: PropTypes.array.isRequired
}

export default Homework;
