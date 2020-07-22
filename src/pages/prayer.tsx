  import React from 'react'
  import Link from 'gatsby-link'

  class User extends React.Component {
    constructor(){
      super();
      this.state = {
        times:[],
      };

    }

    componentDidMount(){
      fetch('https://api.pray.zone/v2/times/today.json?city=lille')
      .then(results=>{
        return results.json();
      })
      .then(data=>{
        let times = data.results.map((t,i)=>{
            return(
              <div key={i} >
                <p>{t.datetime.Imsak}<p/>
              </div>
            )
        })
        this.setState({times:times})
      })
    }

    render() {
      return (<div>{this.state.times}</div>)
    }
  }

  export default User;
