import React, { Component } from 'react';
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Aziz Ridane",
        bio: "student at gomycode.",
        imgSrc: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/315719337_674214364257156_2738489869575890318_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=3_j4nva1W4IAX-fE2kI&_nc_ht=scontent.ftun4-2.fna&oh=00_AfDHjz0pHbEQ6v3TD_3H5q1FuVjP0k21WSNvCYbcMPmfJg&oe=6454C5D6",
        profession: "Web Developer"
      },
      shows: false,
      mountTime: new Date() // store mount time in state
    };
  }

  componentDidMount() {
    // update mount time in state
    this.setState({ mountTime: new Date() });
  }

  handleToggle = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const timeInterval = Math.floor((new Date() - this.state.mountTime) / 1000); // calculate time interval in seconds
 
    return (
      <div className='ssn'>
        <button  onClick={this.handleToggle}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted {timeInterval} seconds ago.</p> {/* display time interval message */}
      </div>
    );
  }
}

export default App;
