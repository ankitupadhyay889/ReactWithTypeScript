import React, { Component } from 'react'

type Listpro = {
    lists:{
    name: string;
    address: string;
    phonenumber: number;
    }[]
}

export default class Listtyp extends Component<Listpro> {
  render() {
    return (
      <div>
          <li> {this.props.lists[0].name} </li>
          <li> {this.props.lists[0].address} </li>
          <li> {this.props.lists[0].phonenumber} </li>
      </div>
    )
  }
}