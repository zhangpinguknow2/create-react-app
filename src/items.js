import React, {Component} from 'react';

class Items extends Component{
  constructor(props) {
    super(props)
    this.state={
      list: ['a', 'b', 'c', 'd', 'e']
    }
  }
  deleteItem(index) {
    let newlist = [...this.state.list];
    newlist.splice(index, 1)
    this.setState(() => ({
      list: newlist
    }))
  }
  render() {
    let list = this.state.list;
    return (
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            onClick={this.deleteItem.bind(this,index)}>{item}</li>
        ))}
      </ul>
    )
  }
}
export default Items;