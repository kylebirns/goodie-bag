import React, {Component} from 'react'
import {candiesThunk} from '../reducers/index'
import {connect} from 'react-redux'


class CandyList extends Component {

    componentDidMount(){
        this.props.getCandies()
    }

    render () {
        return (
            this.props.candy.map(eachCandy => {
                return (
                    <div key={eachCandy.id}>
                        <h3>{eachCandy.name}</h3>
                        <p>{eachCandy.description}</p>
                        <img src={eachCandy.imageUrl} />
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {candy: state.candy}
  }

const mapDispatchToProps = (dispatch) => {
    return {getCandies: () => dispatch(candiesThunk())}
  }


export default connect(mapStateToProps, mapDispatchToProps)(CandyList)
