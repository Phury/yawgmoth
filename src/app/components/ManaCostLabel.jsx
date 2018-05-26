import React from 'react';

class ManaCostLabel extends React.Component {

    render() {
        return (typeof(this.props.manaCost) == "undefined") ? null : this.props.manaCost.split(/{(.*?)}/)
            .filter(str => { return str.trim() != ""; })
            .map((elt, i) => {
                const cost = elt.toLowerCase().replace('/', '');
                return (<i key={i} className={"ms ms-cost ms-"+cost}></i>);
            });
    }
}


export default ManaCostLabel;

