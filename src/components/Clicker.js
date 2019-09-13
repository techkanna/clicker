import React from 'react';

class Clicker extends React.Component{
  state = {
  	num : 0
  }

  incNum = (e) => {
  	this.setState({
  		num : (this.state.num) + 1
  	});
  }

  reset = () => {
  	this.setState({
  		num: 0
  	});
  }

  desNum = () => {
  	this.setState({
  		num: (this.state.num) - 1
  	});
  }

	render() {
		return (
			<div className='container'>
				<div className='wrapper'>
					<div className='output'>
					  {this.state.num}
					</div>
					<div className='btn'>
 					<button onClick={this.incNum}className='one'>+</button>
					<button onClick={this.reset}className='two'><i className="fas fa-sync-alt"></i></button>
					<button onClick={this.desNum}className='three'>-</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Clicker;