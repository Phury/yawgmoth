import React from 'react';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'type' };
    }

    render() {
        return (
            <ul className="collapsible" data-collapsible="accordion">
                <li>
                    <div className="collapsible-header"><i className="material-icons">filter_list</i>Filter</div>
                    <div className="collapsible-body">
                        <div className="row">
                            <div className="col s12">
                                <label htmlFor="cardGroubBy">Group by</label>
                                <select
                                    id="cardGroubBy"
                                    className="browser-default"
                                    onChange={(e) => {
                                        this.setState({ value: e.target.value });
                                        this.props.onGroupingChanged(e, e.target.value);
                                    }}
                                    value={this.state.value}>
                                    <option value="type">Type</option>
                                    <option value="color">Color</option>
                                    <option value="cmc">Cmc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default FilterComponent;
