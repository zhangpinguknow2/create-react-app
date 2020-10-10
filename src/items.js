import React, {Component} from 'react';

class Items extends Component{
  constructor(props) {
    super(props)
    this.state={
      list: [{
        id:1,
        value:'a'
      },{
        id:2,
        value:'b'
      },{
        id:3,
        value:'c'
      },{
        id:4,
        value:'d'
      },{
        id:5,
        value:'e'
      },{
        id:6,
        value:'f'
      }]
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
            key={item.id}
            onClick={this.deleteItem.bind(this,index)}>{item.value}</li>
        ))}
      </ul>
    )
  }
}
export default Items;