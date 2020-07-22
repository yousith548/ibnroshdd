  import React from 'react'
  import Link from 'gatsby-link'

  class User extends React.Component {
    constructor(){
      super();
      this.state = {
        pr:[],
      };

    }

    componentDidMount(){
      fetch('https://api.pray.zone/v2/times/today.json?city=lille')
      .then(results=>{
        return results.json();
      })
      .then(data=>{
        let pr = data.datetime.map((t,i)=>{
            return(
              <div key={i} >
                <p> acaf </p>
                <p>{t.times.Imsak}</p>
              </div>
            )
        })
        this.setState({pr:pr})
      })
    }
    

    render() {
      return (<div>{this.state.pr}</div>)
    }
  }

  export default User;
