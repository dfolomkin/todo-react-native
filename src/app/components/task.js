import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, changeTaskStatus, changeTask } from '../actions';

class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      title: props.title
    };
  }

  componentDidMount() {
    this.taskInputGroup.addEventListener('dblclick', e => {
      e.preventDefault();
    });
    this.taskInput.addEventListener('dblclick', e => {
      e.preventDefault();
    });
  }

  handleDeleteClick = () => {
    this.props.onDeleteTask(this.props.id);
  };

  handleCheckClick = () => {
    this.props.onChangeTaskStatus(this.props.id);
  };

  handleDoubleClick = () => {
    this.setState({ disabled: false });
  };

  handleChange = () => {
    this.setState({ title: this.taskInput.value });
  };

  handleKeyPress = e => {
    if (e.key == 'Enter') {
      this.props.onChangeTask(this.props.id, this.taskInput.value);
      this.setState({ disabled: true });
    }
  };

  handleBlur = () => {
    this.props.onChangeTask(this.props.id, this.taskInput.value);
    this.setState({ disabled: true });
  };

  render() {
    const icon = this.props.done ? <i className="fa fa-check" /> : <i className="fa fa-minus" />;

    return (
      <div className="form-group">
        <div className="input-group" onDoubleClick={this.handleDoubleClick} ref={node => (this.taskInputGroup = node)}>
          <span className="input-group-btn">
            <button
              className={this.props.done ? 'btn btn-success' : 'btn btn-warning'}
              type="button"
              onClick={this.handleCheckClick}
            >
              {icon}
            </button>
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a task"
            value={this.state.title}
            disabled={this.state.disabled}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onBlur={this.handleBlur}
            ref={node => {
              this.taskInput = node;
            }}
          />
          <span className="input-group-btn">
            <button className="btn btn-dark" type="button" onClick={this.handleDeleteClick}>
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onDeleteTask: taskId => {
    dispatch(deleteTask(taskId));
  },
  onChangeTaskStatus: taskId => {
    dispatch(changeTaskStatus(taskId));
  },
  onChangeTask: (taskId, taskTitle) => {
    dispatch(changeTask(taskId, taskTitle));
  }
});

export const Task = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskComponent);
